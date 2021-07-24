import jwt_decode from "jwt-decode";

const checkJwtToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwt_decode(token);
    const current_time = new Date().getTime() / 1000;
    if (current_time > decoded.exp) {
      logout();
    }
    return true;
  } else {
    logout();
  }
};

export const checkAdminRole = () => {
  if (localStorage.getItem("role") === "admin") {
    return true;
  } else {
    logout();
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  window.location.href = "/login";
};

export { checkJwtToken, logout };
