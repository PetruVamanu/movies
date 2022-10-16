import React, { useCallback, useEffect, useState } from "react";
import { getAllMovies } from "services/getAllMovies";
import PageCounter from "components/pageCounter";
import { MovieType } from "types/movie";
import MovieCard from "components/movieCard";
import Modal from "components/Modal/Modal";
import Navbar from "components/navbar";


import { CategoryEnum, CategoryType } from "utils/constants";
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
    <div>
      <Navbar
        category={category}
        onChangeCategory={(category: CategoryType) => {
          setPage(1);
          setCategory(category);
        }}
      />
      <PageCounter page={page} setPage={setPage} />
      <div>
        <Modal movieId={movieId} setMovieId={setMovieId} />
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
      <PageCounter page={page} setPage={setPage} />
    </div>
  );
}

export default App;
