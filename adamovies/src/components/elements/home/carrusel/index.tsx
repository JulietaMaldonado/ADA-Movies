import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { BASE_URL, WIDTH_IMG } from "../../../../constants/movies-api";

type Props = {
  items: any[];
};

const Carrusel: FC<Props> = ({ items }) => {
  return (
    <Carousel variant="dark">
      {items.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={BASE_URL + WIDTH_IMG + movie.backdrop_path}
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
