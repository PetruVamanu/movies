import { baseURL } from "utilities/constants";
import axios from "axios";
import { TrailerType } from "types/trailer";

interface getMovieTrailerResponseType{
    results:TrailerType[];
}

export async function getMovieTrailer(id : number) {
  try {
    const response = await axios.get<getMovieTrailerResponseType>(
      baseURL + "movie/"+ id + "/videos?api_key=" + process.env.REACT_APP_API_KEY +"&language=en-US",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // console.log(JSON.stringify(response.data, null, 4));
    const selectedTrailer = response.data;
    console.log(JSON.stringify(response.data, null, 4));
    // return answer;
    return ({
        isOK: true,
        message: 'Request completed',
        selectedTrailer,
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
        selectedTrailer: {} as getMovieTrailerResponseType,
    });
  }

}
