import { handlePageBack, handlePageNext } from "../../util/paginationHelper";

import { Movie } from "../../services/movie/type";
import MovieCard from "../../components/movie-card";
import useTopRatedMovie from "./hooks/useTopRatedMovie";

const Movies = () => {
  const { page, topRated, navigate } = useTopRatedMovie();

  return (
    <div className="flex flex-col p-20">
      <label className="text-2xl font-semibold">Top Rated</label>
      <div className="flex flex-row px-5 py-10 gap-3 flex-wrap justify-center">
        {topRated?.results.map((item: Movie) => (
          <MovieCard
            id={item.id}
            title={item.title}
            poster_path={item.poster_path}
            release_date={item.release_date}
            size="w-52 h-96"
            hover="hover:scale-110"
            transition="transition-all"
          />
        ))}
      </div>
      <div className="flex flex-row justify-around">
        <button onClick={() => handlePageBack(page, navigate)}>Back</button>
        <label>Page {page}</label>
        <button onClick={() => handlePageNext(page, navigate)}>Next</button>
      </div>
    </div>
  );
};

export default Movies;
