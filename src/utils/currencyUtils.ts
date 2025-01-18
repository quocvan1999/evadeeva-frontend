export function formatCurrency(amount: number): string {
  return amount
    .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
    .replace(/\s/g, "");
}
