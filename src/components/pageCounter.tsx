import React from "react";

interface counterType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const pageCounter: React.FC<counterType> = ({ page, setPage }) => {
  return (
    <div>
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>
      {page}
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default pageCounter;
