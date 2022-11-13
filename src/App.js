import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectedMovie from "./SelectedMovie";
import MovieInfoComponent from "./MovieInfoComponent";
function App() {
  const [text, setText] = useState("");
  const [movie, setmovie] = useState([]);
  const [selectMovie, onMovieSelect] = useState();

  useEffect(() => {
    // Update the document title using the browser API
    if(text==='')
    {
      axios
      .get(`https://www.omdbapi.com/?s=movie&apikey=756d4f94`)
      .then((response) => {
        console.log(response);
        setmovie(response.data.Search);
      });
    }
  });

  const changeText = (e) => {
    setText(e.target.value);
  };
  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=756d4f94`)
      .then((response) => {
        console.log(response);
        setmovie(response.data.Search);
      });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <i className="bi bi-film"></i> React Movies App
          </a>
          <form className="d-flex" role="search" onSubmit={getMovie}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search a movie"
              value={text}
              onChange={changeText}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            {/* {movie} */}
          </form>
        </div>
      </nav>
      {selectMovie && (
        <MovieInfoComponent
          selectMovie={selectMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className="MovieList">
        <div className="items ">
          {movie?.length
            ? movie.map((value, index) => {
                return (
                  <div key={index}>
                    <SelectedMovie
                      value={value}
                      key={index}
                      index={index}
                      onMovieSelect={onMovieSelect}
                    />
                  </div>
                );
              })
            : "No Movie Search"}
        </div>
      </div>
    </div>
  );
}

export default App;
