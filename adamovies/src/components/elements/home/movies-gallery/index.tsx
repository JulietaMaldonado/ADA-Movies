import { apiMovies } from "../../../../utils/axios";
import { FC, useEffect, useState } from "react";
import { BASE_URL, WIDTH_IMG } from "../../../../constants/movies-api";

type Props = {
  items: any[];
  title: string;
};

const MoviesGallery: FC<Props> = ({ items, title }) => {
  return (
    <>
      <div className="title-home">
        <h2 className="title-home2">{title}</h2>
      </div>
      <div className="container-cards-home">
        {items.map((movie) => (
          <div className="card-home">
            <img
              src={BASE_URL + WIDTH_IMG + movie.poster_path}
              className="card-image-home"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { MoviesGallery };
