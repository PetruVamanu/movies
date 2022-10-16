import React from "react";
import { MovieType } from "types/movie";
import { CategoryEnum, CategoryType, imageURL } from "utils/constants";

export interface NavbarType {
  category: string;
  onChangeCategory: (category: CategoryType) => void;
}

const Navbar: React.FC<NavbarType> = ({ category, onChangeCategory }) => {
  return (
    <div>
      <button
        onClick={() => {
          onChangeCategory(CategoryEnum.popular);
        }}
      >
        Popular movies
      </button>
      <button onClick={() => onChangeCategory(CategoryEnum.upcoming)}>
        Upcoming movies
      </button>
      <button onClick={() => onChangeCategory(CategoryEnum.top_rated)}>
        Top rated movies
      </button>
    </div>
  );
};

export default Navbar;
