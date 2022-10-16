import React from "react";
import { CategoryEnum, CategoryType } from "utilities/constants";

export interface NavbarType {
  category: string;
  onChangeCategory: (category: CategoryType) => void;
}

const Navbar: React.FC<NavbarType> = ({ category, onChangeCategory }) => {
  return (
    <div className="flex justify-evenly text-3xl font-semibold  text-blue-500">
      <button className="hover:underline" onClick={() => onChangeCategory(CategoryEnum.popular)}>
        Popular movies
      </button>
      <button className="hover:underline" onClick={() => onChangeCategory(CategoryEnum.upcoming)}>
        Upcoming movies
      </button>
      <button className="hover:underline" onClick={() => onChangeCategory(CategoryEnum.top_rated)}>
        Top rated movies
      </button>
    </div>
  );
};

export default Navbar;
