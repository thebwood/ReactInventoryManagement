import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { REACT_ROUTES } from "../constants/constants";
import Dashboard from "../../features/dashboard";
import Games from "../../features/games";
import Game from "../../features/games/game";
import Movies from "../../features/movies";
import Home from "../../features/home";


const AppRoutes: FC = () => {
    return <Routes>
        <Route path={REACT_ROUTES.HOME} element={<Home />} />
        <Route path={REACT_ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={REACT_ROUTES.GAMES} element={<Games />} />
        <Route path={REACT_ROUTES.GAME} element={<Game />} />
        <Route path={REACT_ROUTES.MOVIES} element={<Movies />} />
        <Route path="*" element={<Dashboard />} />
    </Routes>;
}
export default AppRoutes;