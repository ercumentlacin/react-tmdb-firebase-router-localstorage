import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Context from "../../Context/Context";
import Card from "../Card/Card";

const SearchMovie = () => {
  const location = useLocation();
  const CURRENTLY_URL_PATHNAME = location.pathname.slice(
    8,
    location.pathname.length
  );
  let { searchedMovie } = useParams();
  const [queryResults, setQueryResults] = useState("");
  const { query } = useContext(Context);
  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
    const CURRENTLY_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${CURRENTLY_URL_PATHNAME}`;
    axios
      .get(query ? URL : CURRENTLY_URL)
      .then((response) => {
        setQueryResults(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query]);
  return (
    <div className="container">
      <h1>deneme</h1>
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
