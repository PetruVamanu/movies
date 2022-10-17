import React, { useCallback, useEffect, useState } from "react";
import { getAllMovies } from "services/GetAllMovies";
import PageCounter from "components/PageCounter";
import { MovieType } from "types/movie";
import MovieCard from "components/MovieCard";
import Modal from "components/Modal";
import Navbar from "components/Navbar";

import { CategoryEnum, CategoryType } from "utilities/constants";
function App() {
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<CategoryType>(CategoryEnum.popular);
  const [movieId, setMovieId] = useState<number>(-1);
  const [movies, setMovies] = useState<MovieType[]>([]);

  const handleGetAllMovies = useCallback(async () => {
    const {
      isOK,
      message,
      movies: fetchedMovie,
    } = await getAllMovies(page, category);
    setMovies(fetchedMovie);
    console.log({ isOK, message, fetchedMovie });
  }, [page, category]);

  useEffect(() => {
    console.clear();

    handleGetAllMovies();
  }, [page, category, handleGetAllMovies]);

  return (
    <div className="w-full h-full font-roboto">
      <Navbar
        category={category}
        onChangeCategory={(category: CategoryType) => {
          setPage(1);
          setCategory(category);
        }}
      />
      <PageCounter page={page} setPage={setPage} />
      <Modal movieId={movieId} setMovieId={setMovieId} />
      <div className="w-full h-full flex-1 p-2 md:p-4 xl:p-6 mb-[6rem]">
        <div className="grid grid-cols-1 px-1 md:px-14 lg:grid-cols-2 xl:grid-cols-3 gap-5  mx-auto">
          {
            /* {JSON.stringify(movies, null, 4)} */
            movies.map((movieData: MovieType) => {
              return (
                <MovieCard
                  key={movieData.id}
                  movie={movieData}
                  setMovieId={setMovieId}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
