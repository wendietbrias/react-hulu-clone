import API from "./api";
import { Routes, Route } from "react-router-dom";
import { Header, Movies, MoviesCategory } from "./components";
import { useState, useEffect } from "react";
const APIKEY = `${process.env.REACT_APP_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const {
        data: { results },
      } = await API.get(`/movie/upcoming?api_key=${APIKEY}`);
      setMovies(results);
      console.log(results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index path="/" element={<Movies movies={movies} />} />
        <Route path={`/category`} element={<MoviesCategory />} />
        <Route
          path="*"
          element={
            <div
              style={{ textAlign: "center", color: "#fff", marginTop: "60px" }}
            >
              <h1>Not found page</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
