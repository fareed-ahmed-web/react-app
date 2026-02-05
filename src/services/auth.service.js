import  http  from "./http.service";

export const login = (email, password) => {
    http.post("/auth/login", {
        email,
        password
    })
        .then(response => {
            localStorage.setItem("token", response.data.token);
        })
        .catch(error => {
            console.log(error);
        })
};
export const logout = () => {
    localStorage.removeItem("token");
};
export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};
