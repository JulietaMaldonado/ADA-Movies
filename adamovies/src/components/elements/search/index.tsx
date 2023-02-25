import { apiMovies } from '../../utils/axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const SearchInput = () => {

  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
      apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
  }, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"

$('searchButton').click(function(){
  let query=$('#query').val();

  $.getJSON("https://api.themoviedb.org/3/search/multi?api_key=8f2ec42ca660094d1483c89192516f6a&language=en-US" +query+ "&page=1&include_adult=false"), function(data){

   
console.log(data.results[0])
$('#movie_name').html(data.results[0].title)
$('#movie_desc').html(data.results[0].overview)
$('#poster').attr("src", "https://image.tmdb.org/t/p/w500" + data.results[0])
}}

return (
  <>
   <input type="text" name="" id="query" /><button id='searchButton'>Buscar</button><br />
   
<div className='container-cards'>
 {movies.map(movie => (  <Card>
   
    <Card.Img id='poster'/>
   
  </Card> ))}
</div>
  </>
);
 }

//     const [movies, setMovies] = useState<any[]>([])

//     useEffect(() => {
//       apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
//   }, [])
// const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=8f2ec42ca660094d1483c89192516f6a&"
// const movie = "w500"

//   return (

//     <>
//     <input type="text" name="" id="query" /><button>Buscar</button><br />
//     <div className='container-cards'>
//          {movies.map(movie => (  <Card>
           
//             <Card.Img src= {baseUrl + widthImg + movie.poster_path}/>
           
//           </Card> ))}
//        </div>

//     </>

//   )

}

export {SearchInput}