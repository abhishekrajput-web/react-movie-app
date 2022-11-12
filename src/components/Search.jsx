import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const {searchMovies,setSearchMovies,error} = useGlobalContext();
  return (
    <div>
      <form className='search-form' action="#" onSubmit={(e) => e.preventDefault() }>
        <input type="text" name='text' placeholder='search your favourite movies' value={searchMovies} onChange={(e) => setSearchMovies(e.target.value)} />
      </form>
   
    </div>

  )
}

export default Search;
