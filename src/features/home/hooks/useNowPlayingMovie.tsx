import { useEffect, useState } from "react";

import { ResponseMovie } from "../../../services/movie/type";
import { getNowPlaying } from "../../../services/movie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

const useMovieNowPlaying = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      const response = await getNowPlaying(page as string);

      setNowPlayingData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { page, nowPlayingData, navigate };
};

export default useMovieNowPlaying;
