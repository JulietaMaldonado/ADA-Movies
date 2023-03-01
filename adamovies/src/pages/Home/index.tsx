import { Footer, Header, Main, Carrusel, PopularList, TopList } from "../../components";
import "./style.css"

const Home = () => {
    return <>
    <Header/>
      <Main>
  <Carrusel/>
    <PopularList />
        <TopList/>
      </Main>
        <Footer />
    </>
}

export {Home}