import { useEffect, useState } from "react";
import { Footer, Header, Main } from "../../components";
import { ContUpcoming } from "../../components";
import "./style.css";
import { apiMovies } from "../../utils/axios";

const Upcoming = () => {
 const [upcoming, setUpcoming] = useState([]);
 useEffect(() => {
  apiMovies
  .get("/movie/upcoming")
  .then((response) => setUpcoming(response.data.results));
 }, ([]))

  return (
    <>
      <Header />
      <Main>
        <ContUpcoming items={upcoming} />
      </Main>
      <Footer />
    </>
  );
};

export { Upcoming };
