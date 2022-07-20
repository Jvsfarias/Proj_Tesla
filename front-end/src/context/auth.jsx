import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession, registerAccount } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setUser(token);
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const response = await createSession(username, password);
            const token = response.data.token;
            const userResp = JSON.stringify(response.data.userResp);
            localStorage.setItem("token", token);
            localStorage.setItem("userResp", userResp);
            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(token);
            navigate("/dashboard");
            return true;
        } catch {
            return false;
        }
    };

    const createAccount = async (username, password, adm, id) => {
        try {
            const response = await registerAccount(
                username,
                password,
                password,
                adm,
                id
            );
            return true;
        } catch {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userResp");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };
    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                loading,
                login,
                logout,
                createAccount,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
