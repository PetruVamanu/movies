import React from "react";
import { MovieType } from "types/movie";
import { imageURL } from "utils/constants";

export interface MovieCardType{
  movie: MovieType;
  setMovieId : React.Dispatch<React.SetStateAction<number>>;
}

const movieCard : React.FC<MovieCardType>= ({movie, setMovieId}) => {

  const {title, id, overview, release_date, poster_path} = movie;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h2>Description</h2>
        <div>
          <img src= {imageURL + poster_path} alt="" />
          {overview}
        </div>
      </div>
      <div>Release date: {release_date}</div>
      <button onClick={() => { setMovieId(id); }}>More details</button>
    </div>
  );
};

export default movieCard;
