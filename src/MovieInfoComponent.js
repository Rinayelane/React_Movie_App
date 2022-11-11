import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
function MovieInfoComponent(props) {
  const [text, setText] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${props.selectMovie}&apikey=756d4f94`)
      .then((response) => {
        setText(response.data);
      });
    // console.log(text);
  });
  return (
    <div className="items">
      <div className="ImgContainer">
        <img src={text.Poster} alt="hibdib" />
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

/* Actors
Rated: 'PG-13', Released: '02 May 2008'
: 
"Robert Downey Jr., Gwyneth Paltrow, Terrence Howard"
Awards
: 
"Nominated for 2 Oscars. 21 wins & 73 nominations total"
BoxOffice
: 
"$319,034,126"
Country
: 
"United States, Canada"
DVD
: 
"30 Sep 2008"
Director
: 
"Jon Favreau"
Genre
: 
"Action, Adventure, Sci-Fi"
Language
: 
"English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian" */
