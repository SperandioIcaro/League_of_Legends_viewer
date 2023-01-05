import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ChampInfo } from "./pages/champInfo";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/champInfo/:id" element={<ChampInfo />} />
        </Routes>
    )
}