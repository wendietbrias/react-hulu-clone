import "./style.css";
import Movie from "../Movies/Movie";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import API from "../../api";
const APIKEY = `${process.env.REACT_APP_API_KEY}`;

const MoviesCategory = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    const fetchMoviesByCategories = async () => {
      if (parsed) {
        if (parsed.genreId) {
          const fetchMovies = await API.get(
            `${process.env.REACT_APP_API_ENDPOINT}/discover/movie?api_key=${APIKEY}&with_genres=${parsed.genreId}`
          );

          const {
            data: { results },
          } = fetchMovies;
          return setMovies(results);
        }

        const fetchMovies = await API.get(
          `${process.env.REACT_APP_API_ENDPOINT}/movie/${parsed.category}?api_key=${APIKEY}`
        );
        const {
          data: { results },
        } = fetchMovies;
        return setMovies(results);
      }
    };

    fetchMoviesByCategories();
  }, [location]);

  return (
    <div className="movies__moviescategory">
      {movies.length &&
        movies.map((movie, index) => <Movie key={index} movie={movie} />)}
    </div>
  );
};
export default MoviesCategory;
