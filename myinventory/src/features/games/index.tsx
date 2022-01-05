import React, { FC, Fragment, useEffect } from "react";
import { useStore } from "../../app/stores/store";
import GamesGrid from "./components/gamesGrid";

const Games: FC = () =>{
    const {gameStore} = useStore();
    useEffect(() => {
        loadGames();
        return () => clearSelectedActivity();
    }, [id, loadActivity, clearSelectedActivity]);

    return (
        <Fragment>
            <h1>Games</h1>
            <GamesGrid Games={games}></GamesGrid>
        </Fragment>
    );
};

export default Games;