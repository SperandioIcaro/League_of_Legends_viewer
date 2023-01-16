import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ChampInfo } from "./pages/champInfo";
import { List } from "./pages/list";
import { Summoners } from "./pages/summoners";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/champInfo/:id" element={<ChampInfo />} />
            <Route path="/champList" element={<List />} />
            <Route path="/search-summoner" element={<Summoners id={""} />} />
        </Routes>
    )
}