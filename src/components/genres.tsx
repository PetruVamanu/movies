import React from "react";
import { ObjectNameType } from "types/movie";

interface GenresType {
  genres: ObjectNameType[];
}

const Genres: React.FC<GenresType> = ({ genres }) => {
  if (!genres.length) return null;

  return (
    <div>
      Genres:
      <ul>
        {genres.map(({ name }, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
