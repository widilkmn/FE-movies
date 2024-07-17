import { useEffect, useState } from "react";

import { ResponseTvShow } from "../../../services/tv-show/type";
import { getPopularTvShow } from "../../../services/tv-show";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

const usePopularTvShow = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [popularTvShowData, setPopularTvShow] = useState<ResponseTvShow>();

  useEffect(() => {
    fetchTvShow();
  }, [page]);

  const fetchTvShow = async () => {
    try {
      const response = await getPopularTvShow(page as string);

      setPopularTvShow(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { page, popularTvShowData, navigate };
};

export default usePopularTvShow;
