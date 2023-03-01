
import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';

const ContPopular = () => {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
      apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
  }, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"

   

        return (
          <>   <div className="title-popular">
                  <h2 className='title-popular2'>POPULAR</h2>
            </div>
       <div className='container-popular'>
         {movies.map(movie => (  <div className='tarjeta-popular'>
           
           <img src= {baseUrl + widthImg + movie.poster_path} className='card-image-popular'/>
           
          </div>  ))}
       </div>
          </>
        );
         }
    
  export {ContPopular};