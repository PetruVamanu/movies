export interface MovieType {
    title: string;
    id: number;
    overview: string;
    release_date: string;
    poster_path: string;
    genres: number[];
  }

  
export interface MovieResponseType {
  page: number;
  results: MovieType[];
}