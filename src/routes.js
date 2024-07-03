import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio"
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsProvider } from "./context/CardsContext";

function AppRoutes() {
    return (
        <CardsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path=":newvideo" element={<NewVideo />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CardsProvider>
    )
}

export default AppRoutes