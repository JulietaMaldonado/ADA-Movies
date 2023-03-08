import { Footer, Header, Main } from "../../components";
import { SearchInput } from "../../components/elements/search";
import "./style.css";

const Search = () => {
  return (
    <>
      <Header />
      <Main>
        <SearchInput />
      </Main>
      <Footer />
    </>
  );
};

export { Search };
