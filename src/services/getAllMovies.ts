import { MovieResponseType } from "types/movie";
import { baseURL } from "utils/constants";
import axios from "axios";

export async function getAllMovies(page : number) {
  try {
    const response = await axios.get<MovieResponseType>(
      baseURL + "movie/popular/?api_key=" + process.env.REACT_APP_API_KEY +"&language=en-US&page=" + page,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // console.log(JSON.stringify(response.data, null, 4));
    const movies = response.data.results;
    console.log(JSON.stringify(response.data, null, 4));
    // return answer;
    return ({
        isOK: true,
        message: 'Request completed',
        movies,
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
        movies: [],
    });
  }

}
