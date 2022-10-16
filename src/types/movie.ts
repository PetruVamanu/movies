export interface MovieType {
  title: string;
  id: number;
  overview: string;
  release_date: string;
  poster_path: string;
  genres: number[];
}

export interface ObjectNameType{
  name: string;
}

export interface MovieDetailsType {
  title: string;
  id: number;
  overview: string;
  release_date: string;
  poster_path: string;
  genres: ObjectNameType[];
  production_companies:ObjectNameType[];
  vote_average: number;
  imdb_id: string;
  homepage: string;
  runtime: number;
}

export const EmptyMovieDetail : MovieDetailsType = {
  title: '',
  id: 0,
  overview: '',
  release_date: '',
  poster_path: '',
  genres: [],
  production_companies:[],
  vote_average: 0,
  imdb_id: '',
  homepage: '',
  runtime: 0,
}

export interface MovieResponseType {
  page: number;
  results: MovieType[];
}
