import React from "react";

interface counterType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const pageCounter: React.FC<counterType> = ({ page, setPage }) => {
  return (
    <div className="flex flex-row justify-center">
      <button className="bg-transparent hover:bg-blue-500 rounded-full text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent " disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>
      <span className="mt-1 font-bold text-blue-500 text-2xl">
      {page}

      </span>
      <button className="bg-transparent hover:bg-blue-500 rounded-full text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent " onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default pageCounter;
