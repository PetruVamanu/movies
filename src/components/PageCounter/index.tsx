import React from "react";
import styles from "./PageCounter.module.css";

interface counterType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const pageCounter: React.FC<counterType> = ({ page, setPage }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        prev
      </button>
      <span className={styles.pageNumber}>{page}</span>
      <button
        className={styles.button}
        onClick={() => setPage((prev) => prev + 1)}
      >
        next
      </button>
    </div>
  );
};

export default pageCounter;
