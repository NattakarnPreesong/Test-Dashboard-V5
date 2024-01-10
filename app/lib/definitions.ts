// ไฟล์นี้มีคำจำกัดความประเภทข้อมูลของคุณ
// อธิบายรูปร่างของข้อมูล และประเภทข้อมูลที่แต่ละคุณสมบัติควรยอมรับ
// เพื่อความง่ายในการสอน เรากำลังกำหนดประเภทเหล่านี้ด้วยตนเอง
// อย่างไรก็ตาม ประเภทเหล่านี้จะถูกสร้างขึ้นโดยอัตโนมัติหากคุณใช้ ORM เช่น Prisma
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
  role: 'Admin' | 'Account' | 'Sell' | 'User';
  date: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // ใน TypeScript สิ่งนี้เรียกว่าประเภทสตริงยูเนียน
  // หมายความว่าคุณสมบัติ "สถานะ" สามารถเป็นหนึ่งในสองสตริงเท่านั้น: 'รอดำเนินการ' หรือ 'ชำระเงิน'
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
  date: string;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// ฐานข้อมูลส่งคืนตัวเลขเป็นจำนวนเงิน แต่ต่อมาเราจะจัดรูปแบบให้เป็นสตริงด้วยฟังก์ชัน formatCurrency
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
