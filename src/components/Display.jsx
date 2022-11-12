import React from 'react';
import { useGlobalContext } from './context';
import MovieCard from './MovieCard';
const Display = () => {
 const {movies,loading} = useGlobalContext();

 if (loading) {
  return (
    <div className="loading-container">
      <h1 className='loading'>LOADING...</h1>
    </div>
  )
}

  return (
    
    <div className="container">
      <main>
      {
        movies.map((movie) =>{
           return (  
          <MovieCard movie={movie}  key={movie.imdbID}/>
           )
        })
      }
      </main>
    </div>
  )
}

export default Display;
