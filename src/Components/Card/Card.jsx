import React from "react";
import "./card.css";

export default function Card({ popularmovie }) {
  return (
    <>
      {popularmovie && popularmovie.poster_path && (
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img
              src={`http://image.tmdb.org/t/p/w185${popularmovie.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="muted m-0">
                {popularmovie.release_date &&
                  popularmovie.release_date.slice(0, 4)}
              </p>
              <h5 className="card-title">{popularmovie.title}</h5>
              <p>{popularmovie.vote_average}/10</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
