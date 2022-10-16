import React, { useCallback, useEffect, useState } from "react";
import { getAllMovies } from "services/getAllMovies";
import PageCounter from "components/pageCounter";
import { MovieType } from "types/movie";
import MovieCard from "components/movieCard";
import Modal from "components/Modal/Modal";
import Navbar from "components/navbar";

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
    <div className="w-full h-full p-8 font-roboto">
      <Navbar
        category={category}
        onChangeCategory={(category: CategoryType) => {
          setPage(1);
          setCategory(category);
        }}
      />
      <PageCounter page={page} setPage={setPage} />

      <Modal movieId={movieId} setMovieId={setMovieId} />
      <div className="w-full h-full flex-1 p-2 md:p-4 xl:p-6">
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
      <PageCounter page={page} setPage={setPage} />
    </div>
  );
}

export default App;
