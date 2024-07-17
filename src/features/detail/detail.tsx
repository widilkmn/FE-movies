import { useEffect, useState } from "react";

import { ResponseMovieDetail } from "../../services/movie-detail/type";
import { ResponseTvShowDetail } from "../../services/tv-show-detail/type";
import { formatDate } from "../../util/helper";
import { getMovieDetail } from "../../services/movie-detail";
import { getTvShowDetail } from "../../services/tv-show-detail";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<ResponseMovieDetail>();
  const [tvShow, setTvShow] = useState<ResponseTvShowDetail>();

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

  const fetchTvShowDetails = async () => {
    if (id) {
      try {
        const response = await getTvShowDetail(id);
        setTvShow(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchTvShowDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col p-5 items-center gap-10">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img
        className="rounded-xl shadow-sm w-64"
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="px-80 text-justify">{movie.overview}</p>
      <p>Release Date: {formatDate(movie.release_date)}</p>
    </div>
  );
};

export default Detail;
