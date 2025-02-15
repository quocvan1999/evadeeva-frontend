import CryptoJS from "crypto-js";

// Hàm format tiền tệ việt nam
export function formatCurrency(amount: number): string {
  return amount
    .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
    .replace(/\s/g, "");
}

// Hàm rút gọn chuỗi
export function limitString(inputString: string, limit: number): string {
  if (inputString.length > limit) {
    return inputString.slice(0, limit) + "...";
  } else {
    return inputString;
  }
}

// Hàm set cookie lên trình duyệt
export function setCookie(name: string, value: string, days: number = 7): void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Hàm lấy cookie từ trình duyệt
export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Hàm xóa cookie từ trình duyệt
export function deleteCookie(name: string): void {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// Hàm kiểm tra thời hạn token
export const isTokenExpired = (token: string): boolean => {
  if (!token) return true; // Nếu không có token, coi như đã hết hạn

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Giải mã payload từ token
    const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại (giây)

    return payload.exp < currentTime; // Nếu exp nhỏ hơn thời gian hiện tại => hết hạn
  } catch (error) {
    console.error("Invalid token:", error);
    return true; // Nếu token không hợp lệ, coi như hết hạn
  }
};

// Hàm mã hóa mật khẩu
export const encryptPassword = (password: string): string => {
  return CryptoJS.AES.encrypt(
    password,
    import.meta.env.VITE_PASS_SECRET_KEY || "1"
  ).toString();
};

// Hàm giải mã mật khẩu
export const decryptPassword = (encryptedPassword: string): string => {
  const bytes = CryptoJS.AES.decrypt(
    encryptedPassword,
    import.meta.env.VITE_PASS_SECRET_KEY || "1"
  );
  return bytes.toString(CryptoJS.enc.Utf8);
};
