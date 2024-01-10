import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  // เพิ่ม noStore() ที่นี่เพื่อป้องกันไม่ให้แคชการตอบสนอง
  // สิ่งนี้เทียบเท่ากับ in fetch(..., {cache: 'no-store'})

  try {
    // ชะลอการตอบสนองโดยไม่ตั้งใจเพื่อวัตถุประสงค์ในการสาธิต
    // อย่าทำสิ่งนี้ในการผลิต :)

    // console.log('กำลังเรียกข้อมูลรายได้...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('การดึงข้อมูลเสร็จสิ้นหลังจาก 3 วินาที');

    return data.rows;
  } catch (error) {
    console.error('ฐานข้อมูลผิดพลาด:', error);
    throw new Error('ดึงข้อมูลรายได้ไม่สำเร็จ');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('ฐานข้อมูลผิดพลาด:', error);
    throw new Error('ดึงข้อมูลใบแจ้งหนี้ล่าสุดไม่สำเร็จ');
  }
}

export async function fetchCardData() {
  try {
    // คุณอาจรวมสิ่งเหล่านี้ไว้ในแบบสอบถาม SQL เดียวได้
    // อย่างไรก็ตาม เราตั้งใจแยกพวกมันออกเพื่อสาธิต
    // วิธีเริ่มต้นการสืบค้นหลายรายการพร้อมกันกับ JS
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('ฐานข้อมูลผิดพลาด:', error);
    throw new Error('ดึงข้อมูลการ์ดไม่สำเร็จ');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('ฐานข้อมูลผิดพลาด:', error);
    throw new Error('ดึงข้อมูลใบแจ้งหนี้ไม่สำเร็จ');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('ฐานข้อมูลผิดพลาด:', error);
    throw new Error('ไม่สามารถเรียกข้อมูลใบแจ้งหนี้ทั้งหมดได้');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // แปลงจำนวนเงินจากเซนต์เป็นดอลลาร์
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('ฐานข้อมูลผิดพลาด:', error);
    throw new Error('ดึงข้อมูลใบแจ้งหนี้ไม่สำเร็จ');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('ฐานข้อมูลผิดพลาด:', err);
    throw new Error('ไม่สามารถดึงข้อมูลลูกค้าทั้งหมดได้');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('ฐานข้อมูลผิดพลาด:', err);
    throw new Error('ดึงข้อมูลตารางลูกค้าไม่สำเร็จ');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('ไม่สามารถดึงข้อมูลผู้ใช้:', error);
    throw new Error('ดึงข้อมูลผู้ใช้ไม่สำเร็จ');
  }
}
