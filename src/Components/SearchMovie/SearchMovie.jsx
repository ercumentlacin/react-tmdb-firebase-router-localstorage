import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Card from "../Card/Card";

const SearchMovie = () => {
  const [queryResults, setQueryResults] = useState("");
  const { query } = useContext(Context);
  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
    axios
      .get(URL)
      .then((response) => {
        setQueryResults(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query]);
  return (
    <div className="container">
      <div className="row">
        {queryResults &&
          queryResults.map((movie, index) => (
            <Card key={index} popularmovie={movie} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovie;
