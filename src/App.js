import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import './App.css';

function App () {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies () {
      const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
      setMovies(movies);
      setIsLoading(false);
    }
    getMovies();
  }, [isLoading])
  
  return (
    <div>
      <section className="container">
        {isLoading ?
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        : (
          <div className="movies">
            {movies !==undefined ? movies.map(movie => {

              return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
            }) : 'We are ready'}
          </div>
        )}
      </section>
    </div>
  )
}

export default App;
