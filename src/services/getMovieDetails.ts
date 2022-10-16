import { baseURL } from "utilities/constants";
import axios from "axios";
import { MovieDetailsType } from "types/movie";

export async function getMovieDetails(id : number) {
  try {
    const response = await axios.get<MovieDetailsType>(
      baseURL + "movie/"+ id + "?api_key=" + process.env.REACT_APP_API_KEY +"&language=en-US",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // console.log(JSON.stringify(response.data, null, 4));
    const selectedMovie = response.data;
    console.log(JSON.stringify(response.data, null, 4));
    // return answer;
    return ({
        isOK: true,
        message: 'Request completed',
        selectedMovie,
    });

  } catch (error) {
    let messageError: string;
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      messageError = error.message;
    } else {
      console.log("unexpected error: ", error);
      messageError = "An unexpected error occurred";
    }

    return ({
        isOK: false,
        message: messageError,
        selectedMovie: {} as MovieDetailsType,
    });
  }

}
