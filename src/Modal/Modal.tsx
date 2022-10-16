import React from "react";
import { getMovieDetails } from "services/getMovieDetails";
import { MovieDetailsType } from "types/movie";
import { imageURL } from "utils/constants";
import "./Modal.css";

interface modalType {
  movieId: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}

const Modal: React.FC<modalType> = ({ movieId, setMovieId }) => {
  const [openedMovie, setOpenedMovie] = React.useState<MovieDetailsType>(
    {} as MovieDetailsType
  );
  const handleGetMovieDetails = React.useCallback(async () => {
    const {
      isOK,
      message,
      selectedMovie: fetchedMovie,
    } = await getMovieDetails(movieId);
    setOpenedMovie(fetchedMovie);
  }, [movieId]);

  React.useEffect(() => {
    if (movieId >= 0) {
      console.clear();
      handleGetMovieDetails();
    }
  }, [movieId, handleGetMovieDetails]);

  if (movieId < 0) {
    return null;
  }
  const {title, overview, poster_path,release_date, homepage, imdb_id} = openedMovie;
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

            <div>
              <div>
                <img src= {imageURL + poster_path} alt="" />
                <div>Release date: {release_date}</div>
              </div>
          
            </div>

            <div>
              <h5>Links:</h5>
              <ul>
                <li> <a href={homepage}>Netflix Link</a> </li>
                <li> <a href={"https://www.imdb.com/title/"+imdb_id}  target="_blank" rel="noopener noreferrer">IMDB Link</a> </li>
              </ul>
            </div>

          </div>

        </div>

        <div className="modal-footer">
          <button
            className="close-button"
            onClick={() => {
              setMovieId(-1);
              setOpenedMovie({} as MovieDetailsType);
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
