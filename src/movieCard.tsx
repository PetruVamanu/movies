import React from "react";
import { MovieType } from "types/movie";
import { imageURL } from "utils/constants";

const movieCard : React.FC<MovieType>= ({title, id, overview, release_date, poster_path}) => {

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
      <button>More details</button>
    </div>
  );
};

export default movieCard;
