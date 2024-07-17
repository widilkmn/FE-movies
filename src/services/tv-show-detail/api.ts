import { API } from ".";
import { ResponseTvShowDetail } from "./type";

//MOVIES
const getTvShowDetail = async (id: string) => {
  try {
    const response = await API.get(`/tv/${id}?language=en-US&`);

    return response.data as ResponseTvShowDetail;
  } catch (error) {
    console.log(error);
  }
};

export { getTvShowDetail };
