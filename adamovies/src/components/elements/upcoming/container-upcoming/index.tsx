import { apiMovies } from "../../../../utils/axios";
import { useEffect, useState } from "react";

const ContUpcoming = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    apiMovies
      .get("/movie/upcoming")
      .then((response) => setMovies(response.data.results));
  }, []);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const widthImg = "w500";

  return (
    <>
      {" "}
      <div className="title-upcoming">
        <h2 className="title-upcoming2">UPCOMING</h2>
      </div>
      <div className="container-upcoming">
        {movies.map((movie) => (
          <div className="tarjeta-upcoming">
            <img
              src={baseUrl + widthImg + movie.poster_path}
              className="card-image-upcoming"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { ContUpcoming };
