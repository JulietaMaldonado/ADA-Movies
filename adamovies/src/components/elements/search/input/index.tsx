//import { apiMovies } from '../../../utils/axios';
import axios from 'axios';
import { useEffect, useState } from 'react';
//import Card from 'react-bootstrap/Card';

const SearchInput = () => {


const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "8f2ec42ca660094d1483c89192516f6a"
const URL_IMAGE = "https://image.tmdb.org/t/p/w500/"

const [movies, setMovies] = useState<any []>([])
const [searchKey, setSearchKey] = useState("")

const fetchMovies = async() =>{
    const type = searchKey ? "search" : "discover"
    const {data: { results },
} = await axios.get(` ${API_URL}/${type}/movie`, {
    params: {
        api_key: API_KEY,
        query: searchKey,
    },
});
setMovies(results);
setMovies(results[0]);
}

const searchMovies = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetchMovies()
}

function search(paremtro: string){
    console.log(search)
};

useEffect(() =>{
    fetchMovies();
},[])


return(
    <>

<form action="" className='container-form' onSubmit={searchMovies}>
    <input type="text" onChange={(e) => search(e.target.value)} />
    <button>Buscar</button>
</form>

<div className="container-cards">
            {
                movies.map((movie) => (
                    <div key={movie.movie_id} className='card'>
                        <img src={`${URL_IMAGE + movie.poster_path}`} alt="" className="card-image" />
                    </div>
                ))
            }
        </div>

    </>
)

}

export {SearchInput}