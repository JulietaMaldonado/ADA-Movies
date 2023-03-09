import { FC } from "react";
import { BASE_URL, WIDTH_IMG } from "../../../../constants/movies-api";

type Props = {
  items: any[];
  title: string;
};

const ContCards: FC<Props> = ({ items, title }) => {
  return (
    <>
      <div className="title-page">
        <h2 className="title-page2">{title}</h2>
      </div>
      <div className="container-page">
        {items.map((movie) => (
          <div className="tarjeta-page">
            <img
              src={BASE_URL + WIDTH_IMG + movie.poster_path}
              className="tarjeta-image-page"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { ContCards };
