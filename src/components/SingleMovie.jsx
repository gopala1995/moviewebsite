import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = ({ singleMovie }) => {
  const [array, setArray] = useState([]);
  const { id } = useParams();
  console.log("hhhhhhhh", singleMovie);

  const { isLoading, movie } = useFetch(`&i=${id}`);

  useEffect(() => {
    fun();
  }, []);

  const fun = () => {
    const getData = JSON.parse(localStorage.getItem("itemsID"));
    console.log("GEtData", getData);
    setArray(getData);
  };

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <>
      {array.map((movie) => {
        console.log("mmmmmmmm", movie);
        return (
          <section className="movie-section">
            <div className="movie-card">
              <figure>
                <img src={movie.Poster} alt="dfgh" />
              </figure>
              <div className="card-content">
                <p className="title">{movie.Title}</p>
                <p className="card-text">{movie.Released}</p>
                <p className="card-text">{movie.Type}</p>
                <p className="card-text">{movie.imdbRating} / 10</p>
                <p className="card-text">{movie.Year}</p>
                <NavLink to="/" className="back-btn">
                  Back
                </NavLink>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SingleMovie;
