import { Anime } from "./anime";

export class AnimeDetail extends Anime {

  
    constructor(
        id: number,
      name: string,
      description: string,
      Rating: string,
      episode: string,
      categorie: string,
      studio : string,
      img: string
      ) {
      super(id, name, description, Rating, episode, categorie, studio, img);
    }
  }
  