import React from "react";
import { MovieType } from "types/movie";
import { imageURL } from "utilities/constants";

export interface MovieCardType {
  movie: MovieType;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}

const movieCard: React.FC<MovieCardType> = ({ movie, setMovieId }) => {
  const { title, id, overview, release_date, poster_path } = movie;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-4 border-2 rounded-3xl my-3 ">
      <h1 className="font-bold text-blue-500 text-xl">{title}</h1>
      <div>
        <div className="flex flex-row">
          <div>
            <h2 className="font-semibold underline text-blue-500 text-lg">Description</h2>
            <p className="font-extralight text-ellipsis">{overview}</p>
          </div>
          <img src={imageURL + poster_path} alt="" />
        </div>
      </div>
      <div>Release date: {release_date}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          setMovieId(id);
        }}
      >
        More details
      </button>
    </div>
  );
};

export default movieCard;
