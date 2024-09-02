import {useState, useEffect} from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg'
//4eaace4

const API_URL = 'http://www.omdbapi.com?apikey=4eaace4';

const movie1 = {
    "Title": "Amazing Spiderman",
    "Year": "2012",
    "Type": "Movie"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

       setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Harry Potter');
    }, []);

    return (
        <div className="app">
            <h1>FILMNET</h1>
            <div className="search">
                <input placeholder="Search for movies" 
                value ={searchTerm}
                onChange ={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} 
                alt="search"
                onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie)=> (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;