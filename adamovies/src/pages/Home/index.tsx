import { useEffect, useState } from "react";
import { Footer, Header, Main} from "../../components";
import { Carrusel, GaleriaCards } from "../../components/elements/home";
import Card from 'react-bootstrap/Card';

const Home = () => {
const [items, setItems] = useState()
  // const [movies, setMovies] = useState<Movie[]>({})
  const [popular, setPopular] = useState()
  const [topRated, setTopRated] = useState()

useEffect(() => {
  itemsPopular.getAlPopularl().then(data => setPopular(data))
  itemsTop.getAllTopRated().then(data => setTopRated(data))
}, [])

    return <>
    <Header />
      <Main>
        <Carrusel />
        <div className="toprated-container" >
               <Card> 
               
                  {items.map(item => (
             
                     <Card.Img src={item.poster_path}/>
               
            ))}
                
                
            </Card>
        </div>
     <GaleriaCards items={popular}/>
     <GaleriaCards items={topRated}/>
      {/* <PopularList />
        <TopList/> */}
      </Main>
        <Footer />
    </>
}

export {Home}