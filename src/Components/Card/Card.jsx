import React from "react";

export default function Card() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.themoviedb.org/t/p/w220_and_h330_face/qjqmhhc7uLub22mhu4V6DjOBwXM.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
