import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./style.css"

const PopularList = () => {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
      apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
  }, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"

   

        return (
          <>   <div className="title">
                  <h2>POPULAR</h2>
            </div>
       <div className='container-cards'>
         {movies.map(movie => (  <Card>
           
            <Card.Img src= {baseUrl + widthImg + movie.poster_path}/>
           
          </Card> ))}
       </div>
          </>
        );
         }
    
  export {PopularList};