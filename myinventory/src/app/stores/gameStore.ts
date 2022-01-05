import { makeAutoObservable, reaction } from "mobx";
import agent from "../api/agent";
import { Game } from "../models/game";
import { Pagination, PagingParams } from "../models/pagination";

export default class GameStore {
    gameRegistry = new Map<string, Game>();
    selectedGame: Game | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;
    pagination: Pagination | null = null;
    pagingParams = new PagingParams();
    predicate = new Map().set('all', true);

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.predicate.keys(),
            () => {
                this.pagingParams = new PagingParams();
                this.gameRegistry.clear();
                this.loadGames();
            }
        )
    }
    get axiosParams() {
        const params = new URLSearchParams();
        params.append('pageNumber', this.pagingParams.pageNumber.toString());
        params.append('pageSize', this.pagingParams.pageSize.toString());
        this.predicate.forEach((value, key) => {
            if (key === 'startDate') {
                params.append(key, (value as Date).toISOString())
            } else {
                params.append(key, value);
            }
        })
        return params;
    }

    setPagination = (pagination: Pagination) => {
        this.pagination = pagination;
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    loadGames = async () => {
        this.loadingInitial = true;
        try {
            const result = await agent.Games.list(this.axiosParams);

            this.setPagination(result.pagination);
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }
}