import React, { useCallback, useEffect } from 'react';
import { getAllMovies } from 'services/getAllMovies';
import PageCounter from 'pageCounter';
import { MovieType } from 'types/movie';
import MovieCard from 'movieCard';
import Modal from 'Modal/Modal';
 function App() {

  const [page, setPage] = React.useState(1);
  const [movieId, setMovieId] = React.useState(-1);
  const [movies, setMovies] = React.useState<MovieType[]>([]);

  const handleGetAllMovies = useCallback(async () => {
    const { isOK, message, movies: fetchedMovie } = await getAllMovies(page);
    setMovies(fetchedMovie);
    console.log({ isOK, message, fetchedMovie});
  }, [page]);

  useEffect(() => {
    console.clear();
    
    handleGetAllMovies();
  }, [page, handleGetAllMovies]);

  return (
    <div>
      <div>
        <Modal  movieId={movieId} setMovieId= {setMovieId} />
      {
        /* {JSON.stringify(movies, null, 4)} */
        movies.map((movieData:MovieType)=>{
          return (<MovieCard key={movieData.id} movie={movieData} setMovieId={setMovieId}/>);
        })
      }
      </div>
      <PageCounter page={page} setPage={setPage} />
    </div>
  );
}

export default App;
