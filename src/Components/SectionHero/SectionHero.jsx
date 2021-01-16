import React, { useContext } from "react";
import Context from "../../Context/Context";

export default function SectionHero() {
  // theme changes area
  const { theme } = useContext(Context);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div>
      <div className={`container bg-${theme} text-${constrat} `}>
        <div className="row">
          <div className="col-md-6">
            <h1>
              <span className="text-warning">THE FIRST</span> ONLINE <br />
              STREAMING MOVIE <br />
              SEARCH ENGINE
            </h1>
          </div>
          <div className="col-md-6">deneme</div>
        </div>
      </div>
    </div>
  );
}
