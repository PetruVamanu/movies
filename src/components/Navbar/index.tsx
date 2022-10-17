import React from "react";
import { CategoryEnum, CategoryType } from "utilities/constants";
import styles from "./Navbar.module.css";

export interface NavbarType {
  category: string;
  onChangeCategory: (category: CategoryType) => void;
}

const Navbar: React.FC<NavbarType> = ({ category, onChangeCategory }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onChangeCategory(CategoryEnum.popular)}>
        Popular movies
      </button>
      <button className={styles.button} onClick={() => onChangeCategory(CategoryEnum.upcoming)}>
        Upcoming movies
      </button>
      <button className={styles.button} onClick={() => onChangeCategory(CategoryEnum.top_rated)}>
        Top rated movies
      </button>
    </div>
  );
};

export default Navbar;
