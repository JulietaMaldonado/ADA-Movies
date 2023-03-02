import axios from 'axios';
import { data } from 'jquery';
import { useEffect, useState } from 'react';

const SearchInput = () => {


const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "8f2ec42ca660094d1483c89192516f6a"
const URL_IMAGE = "https://image.tmdb.org/t/p/w500/"

const [movies, setMovies] = useState([])
const [searchKey, setSearchKey] = useState("")

const fetchMovies = async() =>{
    const type = searchKey ? "search" : "discover"
    const {data: { results }} = await axios.get(` ${API_URL}/${type}/movie`, {
    params: {
        api_key: API_KEY,
        query: searchKey,
    },
});
setMovies(results);
}

const searchMovies = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    fetchMovies()
}

function search(paremtro: string){
    setSearchKey(paremtro)
};

useEffect(() =>{
    fetchMovies();
},[])


return(
    <>
<div className="title-search">
    <h2 className="title-search2">SEARCH</h2>
</div>

<form action="" className='container-form-search' onSubmit={searchMovies}>
    <input type="text" onChange={(e) => search(e.target.value)} className='input-search'/>
    <button className='button-search'>Buscar</button>
</form>
{
<div className="container-cards-search">
            {
                movies.map(movie => (
                    <div key={movie.id} className='tarjeta-search'>
                        <img src={`${URL_IMAGE + movie.poster_path}`} alt="" className="card-image-search" />
                    </div>
                ))
            }
        </div>
}
    </>
)

}

export {SearchInput}