import { ResponseTvShow, TvShow } from "../../services/tv-show/type";
import { handlePageBack, handlePageNext } from "../../util/paginationHelper";
import { useEffect, useState } from "react";

import MovieCard from "../../components/movie-card";
import { getPopularTvShow } from "../../services/tv-show";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const TvShows = () => {
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

  return (
    <div className="flex flex-col p-20">
      <label className="text-2xl font-semibold">Popular TV Show</label>
      <div className="flex flex-row px-5 py-10 gap-3 flex-wrap justify-center overflow-x-auto">
        {popularTvShowData?.results.map((item: TvShow) => (
          <MovieCard
            id={item.id}
            title={item.original_name}
            poster_path={item.poster_path}
            release_date={item.first_air_date}
            size="w-52 h-96"
            hover="hover:scale-110"
            transition="transition-all"
          />
        ))}
      </div>
      <div className="flex flex-row justify-around">
        <button onClick={() => handlePageBack(page, navigate)}>Back</button>
        <label >Page {page}</label>
        <button onClick={() => handlePageNext(page, navigate)}>Next</button>
      </div>
    </div>
  );
};

export default TvShows;
