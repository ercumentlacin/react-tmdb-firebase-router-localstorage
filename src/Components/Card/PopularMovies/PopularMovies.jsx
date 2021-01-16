import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function PopularMovies() {
  const axios = require("axios").default;
  const [popular, setPopular] = useState("");
  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    axios
      .get(URL)
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {popular.length &&
          popular.map((item, index) => (
            <Card key={index} popularmovie={item} />
          ))}
      </div>
    </div>
  );
}
