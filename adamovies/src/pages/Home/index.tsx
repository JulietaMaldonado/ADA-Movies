import { Footer, Header, Main} from "../../components";
import { Carrusel, GaleriaList} from "../../components/elements/home";

const Home = () => {

    return <>
    <Header />
      <Main>
        <Carrusel />
     
        {/* <PopularList />
        <TopList/> */}
        <GaleriaList items={popularItems}/>
        <GaleriaList items={topItems}/>
      </Main>
        <Footer />
    </>
}

export {Home}