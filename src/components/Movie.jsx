import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = ({ setSingleMovie }) => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  console.log("---------", movie);
  return (
    <>
      {/* if movie is present then only show data else remain as it is  */}
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem, i) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                // creating local storage for watch-list
                if (localStorage.getItem("itemsID") === null) {
                  localStorage.setItem("itemsID", JSON.stringify([]));
                }

                const wathchlist = (p) => {
                  let X = JSON.parse(localStorage.getItem("itemsID"));
                  X.push(p);
                  localStorage.setItem("itemsID", JSON.stringify(X));
                };

                return (
                  <>
                    <NavLink
                      onClick={() => {
                        wathchlist(curMovieElem);
                      }}
                      to={`/movie/`}
                      key={imdbID}
                    >
                      <div className="card">
                        <div className="card-info">
                          <h2>
                            {movieName.length > 13
                              ? `${movieName}...`
                              : movieName}
                          </h2>
                          <img
                            src={Poster === "N/A" ? imgUrl : Poster}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div>
                        <img
                          style={{ width: "15px", height: "25px" }}
                          src="icons.png"
                        />
                      </div>
                    </NavLink>
                  </>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;
