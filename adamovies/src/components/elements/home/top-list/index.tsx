import { apiMovies } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./../style.css"

const TopList = () => {
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
      apiMovies.get('/movie/top_rated').then(response => setMovies(response.data.results))
  }, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"

   

        return (
          <>   <div className="title-top">
                  <h2 className='title-top2'>TOP RATED MOVIES</h2>
            </div>
       <div className='container-cards-top'>
         {movies.map(movie => (  <Card>
           
            <Card.Img src= {baseUrl + widthImg + movie.poster_path}/>
           
          </Card> ))}
       </div>
          </>
        );
      
     
      // <Carousel variant="dark">
      //  {
      //   movies.map(movie => (
         
      //    <Carousel.Item key={movie.id}>
      //     <img
      //       className="d-block w-100"
      //       src= {baseUrl + widthImg + movie.backdrop_path}
      //       alt="First slide"
      //     />
      //     <Carousel.Caption>
      //       <h5>{movie.title}</h5>
      //       <p>{movie.overview}</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //  ))}
      // </Carousel>
    
  }
   //export default ImgOverlayExample;
  export {TopList};