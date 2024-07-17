import { useEffect, useState } from "react";

import { ResponseMovieDetail } from "../../../services/movie-detail/type";
import { getMovieDetail } from "../../../services/movie-detail";
import { useParams } from "react-router-dom";

const useMovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<ResponseMovieDetail>();

  const fetchMovieDetails = async () => {
    if (id) {
      try {
        const response = await getMovieDetail(id);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return movie;
};

export default useMovieDetail;
