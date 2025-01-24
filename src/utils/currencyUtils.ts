export function formatCurrency(amount: number): string {
  return amount
    .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
    .replace(/\s/g, "");
}

export function limitString(inputString: string, limit: number): string {
  if (inputString.length > limit) {
    return inputString.slice(0, limit) + "...";
  } else {
    return inputString;
  }
}
