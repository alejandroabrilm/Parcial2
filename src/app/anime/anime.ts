export class Anime {
    id: number;
    name: string;
    description: string;
    Rating: string;
    episode: string;
    categorie: string;
    studio : string;
    img: string;
   
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
      this.id = id;
      this.name = name;
      this.Rating = Rating;
      this.description = description;
      this.episode = episode;
      this.categorie = categorie;
      this.studio = studio;
      this.img = img;
    }
   }