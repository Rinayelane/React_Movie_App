import React from "react";

function SelectedMovie(props) {
  return (
    <div>
      <div className="movie">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={props.value.Poster}
            className="card-img-top"
            alt="Movie Poster"
          />
          <div className="card-body">
            <h5 className="card-title item">{props.value.Title}</h5>

            <a
              href="#"
              className="btn btn-primary"
              onClick={() => props.onMovieSelect(props.value.imdbID)}
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedMovie;
