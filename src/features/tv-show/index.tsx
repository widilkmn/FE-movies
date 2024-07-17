import { handlePageBack, handlePageNext } from "../../util/paginationHelper";

import MovieCard from "../../components/movie-card";
import { TvShow } from "../../services/tv-show/type";
import usePopularTvShow from "./hooks/usePopularTvShow";

const TvShows = () => {
  const {page, popularTvShowData, navigate} = usePopularTvShow();

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
