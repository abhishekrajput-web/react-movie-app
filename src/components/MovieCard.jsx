import React from 'react';
import { NavLink } from 'react-router-dom';
const MovieCard = ({movie}) => {

  return (
    <NavLink to={`movies/${movie.imdbID}`} className="movie-link">
      <div className="movie-card">
        <div className="card-image">
          <img src={movie.Poster} alt={movie.Title} className='image' />
        </div>
        <div className="card-details">
          <span>Title - <strong>{movie.Title.slice(0,6) + "..."}</strong> </span>
          <span>Type - <strong>{movie.Type}</strong> </span>
          <span>Year - <strong>{movie.Year}</strong> </span>
        </div>
      </div>
    </NavLink>
  )
}



export default MovieCard;
