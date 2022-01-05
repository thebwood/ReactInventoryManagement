export interface Game{
    id: string;
    title: string;
    description: string;
}

export class Game implements Game {
    constructor(init?: GameFormValues) {
        Object.assign(this, init);
    }
}

  export class GameFormValues {
    id?: string = undefined;
    title: string = '';
    description: string = '';

    constructor(game?: GameFormValues) {
      if (game) {
        this.id = game.id;
        this.title = game.title;
        this.description = game.description;
      }
    }
  }