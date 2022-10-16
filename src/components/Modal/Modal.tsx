import Genres from "components/genres";
import Production from "components/Production";
import React from "react";
import { getMovieDetails } from "services/getMovieDetails";
import { getMovieTrailer } from "services/getMovieVideo";
import { EmptyMovieDetail, MovieDetailsType } from "types/movie";
import { TrailerType } from "types/trailer";
import { imageURL, imdbURL } from "utilities/constants";
import YoutubeEmbed from "components/YoutubeFrame/YoutubeEmbed";
import "./Modal.css";

interface modalType {
  movieId: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}

const Modal: React.FC<modalType> = ({ movieId, setMovieId }) => {
  const [openedMovie, setOpenedMovie] =
    React.useState<MovieDetailsType>(EmptyMovieDetail);
  const [trailer, setTrailer] = React.useState<TrailerType>({
    key: "",
    site: "",
  });
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
    console.log(fetchedTrailer.results);
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
        <div className="flex modal-header items-center justify-center">
          <h3 className="font-bold text-blue-500 text-xl">{title}</h3>
        </div>
        <div className="modal-body p-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center p-5">
              <div className="flex w-3/5">
                <div className="flex flex-col">
                  <h4 className="font-bold text-blue-500 text-lg underline">
                    Description
                  </h4>
                  {overview}
                </div>
              </div>
              <div className="flex flex-col w-1/5">
                <div>
                  <span className="text-blue-500">Release date:</span>{" "}
                  {release_date}
                </div>
                <div>
                  <span className="text-blue-500">Duration:</span> {runtime}{" "}
                  mins
                </div>
                <div>
                  <span className="text-blue-500">Rating:</span> {vote_average}
                </div>
              </div>
              <img src={imageURL + poster_path} alt="" />
            </div>

            <YoutubeEmbed embedId={trailer.key} />

            <div className="flex flex-row justify-evenly text-center pt-5">
              <div className="flex flex-col">
                <h5 className="text-blue-500">Links:</h5>
                <ul>
                  <li>
                    <a
                      href={homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netflix Link
                    </a>
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

            <Genres genres={genres} />
            <Production companies={production_companies} />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="close-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
