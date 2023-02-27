import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';

const PopularList = () => {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
      apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
  }, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"

   

        return (
          <>   <div className="title">
                  <h2 className='title2'>POPULAR</h2>
            </div>
       <div className='container-cards'>
         {movies.map(movie => (  <div className='tarjeta'>
           
           <img src= {baseUrl + widthImg + movie.poster_path} className='card-image'/>
           
          </div>  ))}
       </div>
          </>
        );
         }
    
  export {PopularList};