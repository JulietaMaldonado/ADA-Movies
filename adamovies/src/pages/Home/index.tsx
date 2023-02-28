import { Footer, Header, Main} from "../../components";
import { Carrusel, PopularList, TopList } from "../../components/elements/home";
import "./style.css"

const Home = () => {
    return <>
    <Header />
      <Main>
  <Carrusel/>
    <PopularList />
        <TopList/>
      </Main>
        <Footer />
    </>
}

export {Home}