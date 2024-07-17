import { Movie, ResponseMovie } from "../../services/movie/type";
import { handlePageBack, handlePageNext } from "../../util/paginationHelper";
import { useEffect, useState } from "react";

import MovieCard from "../../components/movie-card";
import { getTopRated } from "../../services/movie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Movies = () => {
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
        <label >Page {page}</label>
        <button onClick={() => handlePageNext(page, navigate)}>Next</button>
      </div>
    </div>
  );
};

export default Movies;
