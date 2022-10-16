import React from "react";
import { ObjectNameType } from "types/movie";

interface GenresType {
  array: ObjectNameType[];
}

const Genres: React.FC<GenresType> = ({ array }) => {
let indx : number = 0;
  if (array.length <= 0) return null;
  return (
    <div>
      Genres:
      <ul>
        {
            
        array.map((my_genre) => {
            indx = indx + 1;
          return <li key={indx}>{my_genre.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Genres;
