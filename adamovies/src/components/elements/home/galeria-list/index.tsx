import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const GaleriaList = ({items}) => {
   const [items, setItems] = useState<any[]>([])

   useEffect(() => {
   popularItems.getAll('/movie/popular').then(data => setItems(data))
   topItems.getAll('/movie/top_rated').then(data => setItems(data))

  
  }, [])

    const baseUrl = "https://image.tmdb.org/t/p/"
    const widthImg = "w500"
  
    return (
    <>
    <div className="container-gallery">
<h2>POPULAR</h2>

{items.map(item => (  
<Card>
           <Card.Img src= {baseUrl + widthImg + item.poster_path}/>
          
         </Card> ))}

    </div>

    <div className="container-gallery">
<h2>TOP RATED</h2>

{items.map(item => (  <Card>
           
           <Card.Img src= {baseUrl + widthImg + item.poster_path}/>
          
         </Card> ))}
    </div>
    </>

  )
  
}

export {GaleriaList}