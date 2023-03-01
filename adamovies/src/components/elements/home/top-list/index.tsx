import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';
const TopList = () => {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
      apiMovies.get('/movie/top_rated').then(response => setMovies(response.data.results))
  }, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"

   

        return (
          <>   <div className="title-home">
                  <h2 className='title-home2'>TOP RATED MOVIES</h2>
            </div>
       <div className='container-cards-home'>
         {movies.map(movie => (  <div className='card-home'>
           
           <img src= {baseUrl + widthImg + movie.poster_path} className='card-image-home'/>
           
          </div> ))}
       </div>
          </>
        );
         }

  export {TopList};