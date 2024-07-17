import { formatDate } from "../../util/helper";
import useMovieDetail from "./hooks/useMovieDetail";

const Detail = () => {
  const movie = useMovieDetail();

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
