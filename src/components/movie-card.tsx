import { Link } from "react-router-dom";
import { formatDate } from "../util/helper";

interface Props {
  id?: number,
  type?: string,
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
  hover?: string;
  transition?: string;
}

const MovieCard = (props: Props) => {
  const { id, type, title, poster_path, release_date, size, hover, transition } = props;
  return (
    <Link to={`/detail/${type}/${id}`}>
      <div
        className={`flex flex-col items-center shadow-xl rounded-2xl gap-2 text-center p-3 overflow-hidden ${size} ${hover} ${transition}`}
        id={`${id}`}
      >
        <img
          className="rounded-xl shadow-sm"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          loading="lazy"
        />
        <label className="font-bold">{title}</label>
        <p className="text-sm">{formatDate(release_date)}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
