import { createContext, useContext } from "react";
import GameStore from "./gameStore";
import MovieStore from "./movieStore";
import CommonStore from "./commonStore";


interface Store {
    commonStore: CommonStore;
    gameStore: GameStore;
    movieStore: MovieStore;

}

export const store: Store = {
    gameStore: new GameStore(),
    commonStore: new CommonStore(),
    movieStore: new MovieStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}