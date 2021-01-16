import React, { useContext } from "react";
import Context from "../../Context/Context";

export default function SectionHero() {
  // theme changes area
  const { theme } = useContext(Context);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div>
      <div className={`container bg-${theme} text-${constrat} pt-lg-5`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-2">
              <span className="text-warning">THE FIRST</span> ONLINE <br />
              STREAMING MOVIE <br />
              SEARCH ENGINE
            </h1>
          </div>
          <div className="col-md-6">
            {" "}
            <p>
              Speedy TV is an online streaming movie search engine with filters
              to find best movies for you. Use our website to watch movies
              online throught the Netflix catalog. İts easy..
            </p>{" "}
            <p>
              Sort and filter streaming movies based on release year , IMDB and
              Rotten Tomatoes ratings and Age/MPAA ratings. The click on the
              movie to get more details and a direct link to view the movie
              online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
