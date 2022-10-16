export interface MovieType {
  title: string;
  id: number;
  overview: string;
  release_date: string;
  poster_path: string;
  genres: number[];
}

interface company{
  name: string;
}

export interface MovieDetailsType {
  title: string;
  id: number;
  overview: string;
  release_date: string;
  poster_path: string;
  genres: number[];
  production_companies:company[];
  vote_average: number;
  imdb_id: string;
  homepage: string;
}


export interface MovieResponseType {
  page: number;
  results: MovieType[];
}
