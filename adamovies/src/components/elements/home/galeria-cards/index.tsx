//import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const GaleriaCards = () => {
    const [items, setItems] = useState ([])

useEffect (() => {
popularItems.getAll().then(data => setItems (data))
topRatedItems.getAll().then(data => setItems (data))
})

return (
    <>
    <div className="container-cards">
        <div className="popular-container">
        <Card> {items (item => (
             
             <Card.Img src={item.poster_path}/>
       
    ))} 
    </Card>
        </div>
        <div className="toprated-container" >
              <Card> {items (item => (
             
                     <Card.Img src={item.poster_path}/>
               
            ))} 
            </Card>
        </div>
    </div>
    </>
)
}

export {GaleriaCards}