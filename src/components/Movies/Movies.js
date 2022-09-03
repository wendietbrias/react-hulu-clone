import Movie from "./Movie";
import "./style.css";

const Movies = ({ movies }) => {
  return (
    <div className="movies__grid">
      {movies.length &&
        movies.map((movie, index) => <Movie key={index} movie={movie} />)}
    </div>
  );
};

export default Movies;
