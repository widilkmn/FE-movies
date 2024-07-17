import { API } from ".";
import { ResponseMovieDetail } from "./type";

//MOVIES
const getMovieDetail = async (id: string) => {
  try {
    const response = await API.get(`/movie/${id}?language=en-US&`);

    return response.data as ResponseMovieDetail;
  } catch (error) {
    console.log(error);
  }
};

export { getMovieDetail };
