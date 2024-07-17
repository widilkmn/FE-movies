import { useEffect, useState } from "react";

import { ResponseMovie } from "../../../services/movie/type";
import { getTopRated } from "../../../services/movie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

const useTopRatedMovie = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [topRated, setTopRated] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      const response = await getTopRated(page as string);

      setTopRated(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { page, topRated, navigate };
};

export default useTopRatedMovie;
