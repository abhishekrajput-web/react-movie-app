import React,{useState,useEffect} from 'react';
import { API_KEY } from './context';
import { useParams, NavLink} from 'react-router-dom';
import SectionHeading from './SectionHeading';
const SingleMoviePage = () => {
const {id} = useParams();
    const [movies,setMovies] = useState("");
    const [loading,setLoading] = useState(true);
    const fetchMovies = async (url) =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMovies(data);
            }
        }

        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        let setTime = setTimeout(() => {
            fetchMovies(`${API_KEY}i=${id}`)
        }, 800);
        return () => clearTimeout(setTime);
    },[id]);


    if (loading) {
        return (
          <div className="loading-container">
            <h1 className='loading'>LOADING...</h1>
          </div>
        )
      }

      const ActorNames = movies.Actors;
      const ActorArray = ActorNames.split(", ");
      console.log(ActorNames,ActorNames);

      const GenreName = movies.Genre;
      const GenreArray = GenreName.split(", ");
      console.log(GenreArray);

      const WriterNames = movies.Writer;
      const WriterArray = WriterNames.split(", ");
      console.log(WriterArray);

      const RatingSites = movies.Ratings;

  return (
    
    <section>
        <div className="container">
        <div className="poster-container">
            <div className="poster-img-container">
     <img className='poster-img' src={movies.Poster} alt="jfjfj" />
            </div>
     <div className="poster-details">
        <span>Title -   {movies.Title} </span>
        <span>Type -   {movies.Type} </span>
        <span>Plot -   {movies.Plot} </span>
        <span>Director -   {movies.Director} </span>
        <span>BoxOffice -   {movies.BoxOffice} </span>
        <span>Awards -   {movies.Awards} </span>
        <span>Language -   {movies.Language} </span>
        <span>Country -   {movies.Country} </span>
        <span>RATED -   {movies.Rated} </span>
        <span>Released -   {movies.Released} </span>
        <span>Year -   {movies.Year} </span>



        <div className="genre-section">
        {GenreArray.map((genre,index) =>{
          return (
            <div className="genre-box" key={index}>
              <p>{genre}</p>
            </div>
          )
        })}
        </div>

        <NavLink to="/" className="go-back">
          Go Back
        </NavLink>
    
     </div>
        </div>


 
 
        <SectionHeading heading="Actors"/>

        <div className="actors-section">
        {ActorArray.map((genre,index) =>{
          return (
            <div className="actors-box" key={index}>
              <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="name" />
              <h2>{genre}</h2>
            </div>
          )
        })}
        </div>

        <SectionHeading heading="Writers"/>

<div className="writers-section">
{WriterArray.map((writer,index) =>{
  return (
    <div className="writers-box" key={index}>
      <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="name" />
      <h2>{writer}</h2>
    </div>
  )
})}
</div>

     
<SectionHeading heading="Rating Sites"/>

<div className="rating-section">
{RatingSites.map((rating,index) =>{
  return (
    <div className="rating-box" key={index}>
      <span> <strong>Source</strong>  - {rating.Source}</span>
      <span> <strong>Ratings</strong>  - {rating.Value}</span>
      <a href={`https://www.imdb.com/title/${movies.imdbID}`} target="_blank">{rating.Source}</a>
    </div>
  )
})}
</div>

        </div>
    </section>
  )
}

export default SingleMoviePage;
