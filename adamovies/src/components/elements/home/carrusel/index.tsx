import Carousel from "react-bootstrap/Carousel";
import { apiMovies } from "../../../../utils/axios";
import { useEffect, useState } from "react";

const Carrusel = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    apiMovies
      .get("/movie/top_rated")
      .then((response) => setMovies(response.data.results));
  }, []);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const widthImg = "w1280";

  return (
    <Carousel variant="dark">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={baseUrl + widthImg + movie.backdrop_path}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="movie-title-home">{movie.title}</h5>
            <p className="movie-desc-home">{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { Carrusel };
