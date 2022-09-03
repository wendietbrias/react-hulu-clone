import { MdDateRange, MdOutlineThumbUpOffAlt } from "react-icons/md";

const Movie = ({ movie }) => {
  return (
    <div className="movies__movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie.original_title}
      />
      <div className="movies__movie-card-desc">
        <p>{movie?.overview}</p>
        <h3>{movie?.original_title}</h3>
        <div className="movies__movie-card-subinfo">
          <h6>
            <MdDateRange className="movies__movie-card-icon" />
            {movie?.release_date}
          </h6>
          <h6>
            <MdOutlineThumbUpOffAlt className="movies__movie-card-icon" />
            {movie?.vote_count}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Movie;
