import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Context from "../../Context/Context";
import "./m-movie-detail.css";

const MovieDetail = (props) => {
  const { theme, toggleTheme, user } = useContext(Context);
  const constrat = theme === "light" ? "dark" : "light";
  const [popular, setPopular] = useState("");
  const [credit, setCredit] = useState("");

  let { movie_detail } = useParams();
  const movie_id = window.location.pathname.substring(
    7,
    window.location.pathname.length
  );

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const URL_CREDITS = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        setPopular(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    //   FOR GET CREDITS
    axios
      .get(URL_CREDITS)
      .then((response) => {
        setCredit(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const { id, backdrop_path, title, vote_average, overview } = popular;
  // for creators
  let Arr = [];
  let uniqueArray;
  credit &&
    credit.crew
      .filter((item) => item.known_for_department === "Directing")
      .map((item) => {
        Arr.push(Object.entries(item)[4][1]);
      });

  uniqueArray = Arr.filter(function (item, pos) {
    return Arr.indexOf(item) == pos;
  });

  // for stars
  let stars = [];
  let uniqueStars;

  credit &&
    credit.cast
      .filter((item) => item.known_for_department === "Acting")
      .map((item) => {
        stars.push(Object.entries(item)[4][1]);
      });
  uniqueStars = stars.filter(function (item, pos) {
    return stars.indexOf(item) == pos;
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}` +
          ")",
        height: "100%",
      }}
      className="movie__detail"
    >
      <div
        className={`container text-center mt-5 bg-transparent text-${constrat}`}
      >
        <div className="row">
          <div className="col-sm-4 offset-sm-8">
            <div className="d-flex flex-column">
              {/* vote */}
              <p className="vote_average d-flex align-items-center mb-0">
                {vote_average}
                <span className="d-flex flex-column point">
                  <i className="fas fa-star text-warning"></i>
                  <span className="total__point">/10</span>
                </span>
              </p>
              {/* overview */}
              <p className="text-start movie__overview mt-2">{overview}</p>
              <p className="mt-4 text-start labores">
                Creators: <strong>{uniqueArray.join(", ")}</strong>
              </p>
              <p className="text-start labores">
                Creators: <strong>{uniqueStars.slice(0, 5).join(", ")}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
