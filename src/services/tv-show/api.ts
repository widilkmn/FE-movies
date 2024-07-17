import { API } from ".";
import { ResponseTvShow } from "./type";

//TV-SHOW
const getPopularTvShow = async (page: string) => {
    try {
        const response = await API.get(`/discover/tv?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`)
        
        return response.data as ResponseTvShow;
    } catch (error) {
        console.log(error);
        
    }
}

export { getPopularTvShow };
