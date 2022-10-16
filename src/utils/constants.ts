export const baseURL: string = "https://api.themoviedb.org/3/";
export const imageURL: string = "https://image.tmdb.org/t/p/w185/";
export const imdbURL: string = "https://www.imdb.com/title/";

export enum CategoryEnum {
  popular = "popular",
  upcoming = "upcoming",
  top_rated = "top_rated",
}

export type CategoryType = keyof typeof CategoryEnum;