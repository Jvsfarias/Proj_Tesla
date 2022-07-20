import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    // baseURL: "http://192.168.0.22:3001",
});

export const createSession = async (username, password) => {
    return api.post("/auth/login", { username, password });
};

export const registerAccount = async (
    username,
    password,
    confirmpassword,
    adm,
    id
) => {
    return api.post(`/auth/register/${id}`, {
        username,
        password,
        confirmpassword,
        adm,
    });
};
