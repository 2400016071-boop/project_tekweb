// akun admin yang benar
export const adminAccount = {
  username: "admin",
  password: "admin123",
};

// fungsi validasi login
export const loginAdmin = (username, password) => {
  // cek apakah input sesuai akun admin
  if (username === adminAccount.username && password === adminAccount.password) {
    // simpan flag login untuk AdminRoute
    localStorage.setItem("isAdminLogin", "true");
    // simpan data admin untuk profile
    localStorage.setItem("admin", JSON.stringify(adminAccount));
    return true;
  }
  return false;
};

// logout admin
export const logoutAdmin = () => {
  localStorage.removeItem("isAdminLogin");
  localStorage.removeItem("admin");
};

// ambil data admin
export const getAdmin = () => {
  return JSON.parse(localStorage.getItem("admin"));
};
