import { FC } from "react";
import { BASE_URL, WIDTH_IMG } from "../../../../constants/movies-api";

type Props = {
  items: any[];
  title: string;
};

const ContUpcoming: FC<Props> = ({ items, title }) => {
  return (
    <>
      <div className="title-upcoming">
        <h2 className="title-upcoming2">{title}</h2>
      </div>
      <div className="container-upcoming">
        {items.map((movie) => (
          <div className="tarjeta-upcoming">
            <img
              src={BASE_URL + WIDTH_IMG + movie.poster_path}
              className="tarjeta-image-upcoming"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { ContUpcoming };
