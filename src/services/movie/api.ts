import { API } from ".";
import { ResponseMovie } from "./type";

//MOVIES
const getNowPlaying = async (page: string) => {
  try {
    const response = await API.get(`/movie/now_playing?language=en-US&page=${page}`);

    return response.data as ResponseMovie;
  } catch (error) {
    console.log(error);
  }
};

const getTopRated= async (page: string) => {
  try {
    const response = await API.get(`/movie/top_rated?language=en-US&page=${page}`);

    return response.data as ResponseMovie;
  } catch (error) {
    console.log(error);
  }
};

export { getNowPlaying, getTopRated };
