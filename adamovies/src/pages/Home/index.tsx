import { useEffect, useState } from "react";
import {
  Footer,
  Header,
  Main,
  Carrusel,
  PopularList,
  TopList,
  MoviesGallery,
} from "../../components";
import { apiMovies } from "../../utils/axios";
import "./style.css";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    apiMovies
      .get("/movie/popular")
      .then((response) => setPopular(response.data.results));

    apiMovies
      .get("/movie/top_rated")
      .then((response) => setTopRated(response.data.results));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Carrusel items={topRated} />
        <MoviesGallery items={popular} title="POPULAR" />
        <MoviesGallery items={topRated} title="TOP RATED MOVIES" />
        {/* <PopularList />
        <TopList /> */}
      </Main>
      <Footer />
    </>
  );
};

export { Home };
