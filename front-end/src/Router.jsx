import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/auth";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Modelo1 } from "./pages/modelo1";

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
                <Route path="/modelo1" element={<Modelo1 />} />
                <Route
                    path="/dashboard"
                    element={
                        <Private>
                            <Dashboard />
                        </Private>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    );
};
