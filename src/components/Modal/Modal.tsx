import Genres from "components/genres";
import Production from "components/Production";
import React from "react";
import { getMovieDetails } from "services/getMovieDetails";
import { getMovieTrailer } from "services/getMovieVideo";
import { EmptyMovieDetail, MovieDetailsType } from "types/movie";
import { TrailerType } from "types/trailer";
import { imageURL, imdbURL } from "utils/constants";
import YoutubeEmbed from "components/YoutubeFrame/YoutubeEmbed";
import "./Modal.css";

interface modalType {
  movieId: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}

const Modal: React.FC<modalType> = ({ movieId, setMovieId }) => {
  const [openedMovie, setOpenedMovie] = React.useState<MovieDetailsType>(EmptyMovieDetail);
  const [trailer, setTrailer] = React.useState<TrailerType>({key: '', site:'',});
  const handleGetMovieDetails = React.useCallback(async () => {
    const {
      // isOK,
      // message,
      selectedMovie: fetchedMovie,
    } = await getMovieDetails(movieId);
    setOpenedMovie(fetchedMovie);
  }, [movieId]);

  const handleGetTrailer = React.useCallback(async () => {
    const {
      // isOK,
      // message,
      selectedTrailer: fetchedTrailer,
    } = await getMovieTrailer(movieId);
    console.log(fetchedTrailer.results)
    setTrailer(fetchedTrailer.results[0]);
  }, [movieId]);

  React.useEffect(() => {
    if (movieId >= 0) {
      console.clear();
      handleGetMovieDetails();
      handleGetTrailer();
    }
  }, [movieId, handleGetMovieDetails, handleGetTrailer]);

  if (movieId < 0) {
    return null;
  }
  const {
    title,
    overview,
    poster_path,
    release_date,
    homepage,
    imdb_id,
    genres,
    production_companies,
    runtime,
    vote_average,
  } = openedMovie;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <div className="row">
            <div>
              <h4>Description</h4>
              <div>{overview}</div>
            </div>

          
          <YoutubeEmbed embedId={trailer.key} />

            <div>
              <div>
                <img src={imageURL + poster_path} alt="" />
                <div>Release date: {release_date}</div>
                <div>Duration: {runtime} mins</div>
                <div>Rating: {vote_average}</div>
              </div>
            </div>

            <div>
              <h5>Links:</h5>
              <ul>
                <li>
                  
                  <a href={homepage} 
                    target="_blank"
                    rel="noopener noreferrer"
                     >Netflix Link</a>
                </li>
                <li>
                  
                  <a
                    href={imdbURL + imdb_id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDB Link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Genres genres={genres} />
          <Production companies={production_companies} />
        </div>

        <div className="modal-footer">
          <button
            className="close-button"
            onClick={() => {
              setMovieId(-1);
              setOpenedMovie(EmptyMovieDetail);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
