import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/auth";
import { Conta } from "./pages/Conta";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { ModeloX } from "./pages/ModeloX";

export const Router = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return (
                <div className="h-[100vh] w-[100vw] flex justify-center items-center">
                    <CircularProgress />
                </div>
            );
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        } else {
            return children;
        }
    };

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modeloX" element={<ModeloX />} />
                <Route
                    path="/dashboard"
                    element={
                        <Private>
                            <Dashboard />
                        </Private>
                    }
                />
                <Route
                    path="/dashboard/:id"
                    element={
                        <Private>
                            <Conta />
                        </Private>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    );
};
