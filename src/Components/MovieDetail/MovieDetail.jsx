import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Context from "../../Context/Context";
import "./m-movie-detail.css";

const MovieDetail = (props) => {
  const { theme, toggleTheme, user } = useContext(Context);
  const constrat = theme === "light" ? "dark" : "light";
  const [popular, setPopular] = useState("");

  let { movie_detail } = useParams();
  const movie_id = window.location.pathname.substring(
    7,
    window.location.pathname.length
  );
  console.log(props, "props", movie_id);

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    axios
      .get(URL)
      .then((response) => {
        setPopular(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const { id, backdrop_path, title, vote_average, overview } = popular;
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
