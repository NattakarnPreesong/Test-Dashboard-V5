import { Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'th-TH',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // คำนวณป้ายกำกับที่เราต้องแสดงบนแกน y
  // อิงจากสถิติสูงสุดและในรอบ 1,000 ปี
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // หากจำนวนหน้าทั้งหมดคือ 7 หรือน้อยกว่า
  // แสดงหน้าทั้งหมดโดยไม่มีจุดไข่ปลา
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // หากหน้าปัจจุบันอยู่ใน 3 หน้าแรก
  // แสดง 3 ตัวแรก, จุดไข่ปลา และ 2 หน้าสุดท้าย
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // หากหน้าปัจจุบันอยู่ใน 3 หน้าสุดท้าย
  // แสดง 2 ตัวแรก, จุดไข่ปลา และ 3 หน้าสุดท้าย
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // หากหน้าปัจจุบันอยู่ตรงกลาง
  // แสดงหน้าแรก, จุดไข่ปลา, หน้าปัจจุบันและเพื่อนบ้าน
  // จุดไข่ปลาอีกอันและหน้าสุดท้าย
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
