import React, { useCallback, useEffect } from 'react';
import { getAllMovies } from 'services/getAllMovies';
import PageCounter from 'pageCounter';
import { MovieType } from 'types/movie';
import MovieCard from 'movieCard';
 function App() {

  const [page, setPage] = React.useState(1);
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
      {
        /* {JSON.stringify(movies, null, 4)} */
        movies.map((movieData:MovieType)=>{
          return (<MovieCard title={movieData.title} overview={movieData.overview} release_date={movieData.release_date} id={movieData.id} genres={movieData.genres}   poster_path={movieData.poster_path}/>);
        })
      }
      </div>
      <PageCounter page={page} setPage={setPage} />
    </div>
  );
}

export default App;
