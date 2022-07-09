import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Modelo1 } from "./pages/modelo1";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/modelo1" element={<Modelo1/>}/>
            <Route path="/dashboard" element={<Modelo1/>}/>
        </Routes>
    )
}