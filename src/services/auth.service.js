import http from "./http.service";

export const login = (workEmail, password) => {
  return http
    .post("http://localhost:8080/auth/login", {
      workEmail,
      password,
    })
    .then((response) => {
     return response
    })
    .catch((error) => {
      console.log(error);
    });
};
export const logout = () => {
  localStorage.removeItem("token");
};
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
