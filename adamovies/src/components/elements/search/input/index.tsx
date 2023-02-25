import { apiMovies } from '../../../utils/axios';
 import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function SearchInput() {


const api_url = "https://api.themoviedb.org/3/";
const api_key = "8f2ec42ca660094d1483c89192516f6a";
const [movies, setMovies] = useState<any[]>([])
const [searchKey, setSearchKey] = useState<any[]>([])

const fetchMovies = async(searchKey: any[] | undefined) =>{
    const type = searchKey ? "search" : "discover"
    const {data: {results},
} = await axios.get(` ${api_url}/${type}/movie`, {
    params: {
        api_key: api_key,
        query: searchKey,
    }
});
setMovies(results);
setMovies(results[0]);
}

const searchMovies = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetchMovies(searchKey);
}


useEffect(() => {
    apiMovies.get('/movies/').then(response => setMovies(response.data.results))
    fetchMovies([0]);
}, [])
const baseUrl = "https://image.tmdb.org/t/p/"
const widthImg = "w500"


return(
    <>
    <div className="input-search">
        <form onSubmit={searchMovies}>
        <input type="text" placeholder='Buscar' onChange={(e)=> setSearchKey(e.target.value)}/>
   <button className='button-search'>Buscar</button>
    </form></div>
    <div className='container-cards'>
         {movies.map(movie => (  
         <div key={movie.id}>

       
         <Card>
           
            <Card.Img src= {baseUrl + widthImg + movie.poster_path}/>
           
          </Card>  </div> ))}
       </div>

    </>
)

}

export {SearchInput}