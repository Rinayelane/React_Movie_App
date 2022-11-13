import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
function MovieInfoComponent(props) {
  const [text, setText] = useState([]);

  useEffect(() => {
     axios
      .get(`https://www.omdbapi.com/?i=${props.selectMovie}&apikey=756d4f94`)
      .then((response) => {
        setText(response.data);
      });
    // console.log(text);
  });
  return (
    <div className="items">
      <div className="ImgContainer">
        <img src={text.Poster} alt="Movie" />
      </div>
      <div className="DetailContainer">
        <h2>Movie : {text.Title}</h2>
        <p>
          <b>Actors :</b> {text.Actors}
        </p>
        <p>
          <b>Rated :</b> {text.Rated}
        </p>
        <p>
          <b>Released :</b> {text.Released}
        </p>
        <p>
          <b>Awards :</b> {text.Awards}
        </p>
        <p>
          <b>BoxOffice :</b> {text.BoxOffice}
        </p>
        <p>
          <b>Country :</b> {text.Country}
        </p>
        <p>
          <b>Director :</b> {text.Director}
        </p>
        <p>
          <b>Language :</b> {text.Language}
        </p>
        <h3></h3>
      </div>
      <div>
        <button
          className="btn1"
          onClick={() => {
            props.onMovieSelect();
          }}
        >
          <b>X</b>
        </button>
      </div>
    </div>
  );
}

export default MovieInfoComponent;