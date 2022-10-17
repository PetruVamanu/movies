import Genres from "components/Genres";
import Production from "components/Production";
import React from "react";
import { getMovieDetails } from "services/GetMovieDetails";
import { getMovieTrailer } from "services/GetMovieVideo";
import { EmptyMovieDetail, MovieDetailsType } from "types/movie";
import { TrailerType } from "types/trailer";
import { imageURL, imdbURL } from "utilities/constants";
import YoutubeEmbed from "components/YoutubeFrame/YoutubeEmbed";
import styles from "./Modal.module.css";

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
    <div className={styles.modal} onClick={() => {
      setMovieId(-1);
      setOpenedMovie(EmptyMovieDetail);
    }}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className="font-bold text-blue-500 text-3xl">{title}</h3>
        </div>
        <div className={styles.body}>
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap items-center justify-center p-5">
              <div className="flex flex-1 min-w-[200px]">
                <div className="flex flex-col">
                  <h4 className="font-bold text-blue-500 text-lg underline">
                    Description
                  </h4>
                  {overview}
                </div>
              </div>
              <div className="flex flex-col flex-1 min-w-[200px]">
                <div className="md:px-12 my-5 md:my-0">
                  <div>
                    <span className="text-blue-500">Release date:</span>{" "}
                    {release_date}
                  </div>
                  <div>
                    <span className="text-blue-500">Duration:</span> {runtime}{" "}
                    mins
                  </div>
                  <div>
                    <span className="text-blue-500">Rating:</span>{" "}
                    {vote_average}
                  </div>
                </div>
              </div>
              <img src={imageURL + poster_path} alt="" />
            </div>

            <hr />

            <div className="flex flex-row flex-wrap justify-evenly text-center py-7">
              <div className="flex flex-col">
                <h5 className="text-blue-500">Links:</h5>
                <ul>
                  <li>
                    <a className={styles.link}
                      href={homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netflix Link
                    </a>
                  </li>
                  <li>
                    <a className={styles.link}
                      href={imdbURL + imdb_id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IMDB Link
                    </a>
                  </li>
                </ul>
              </div>

              <div className="min-w-[200px] my-4 md:my-0">
                <Genres genres={genres} />
              </div>
              <div className="min-w-[200px]">
                <Production companies={production_companies} />
              </div>
            </div>

            <hr />
            <div className="m-5">
              <YoutubeEmbed embedId={trailer.key} />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
