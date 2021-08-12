import './AppGuide.css';
import Movie from './components/Movie';
import { useState } from 'react';
import Ring from './components/Ring';


function App() {

  
  
//CODE
  /*const[movies,setMovies] =useState([]);
  const fetchMoviesHandler = () =>{
    setFetchMovies((curState)=> !curState);
    fetch('https://swapi.dev/api/films/').then((response)=>{
     return response.json();
    }).then((data)=>{
      //const transformedMovies = //data.results.map(movieData => //{
        //return{
          //id:movieData.episode_id,
          //title:movieData.title,
          //description:movieData.opening_crawl
        //};
     // })
      setMovies(data.results);
    });
  }*/
  //PRACTICE
  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] =useState(false);
  const [error,setError] = useState(null);
  /*const fetchMoviesHandler=()=>{
      setIsLoading(true);
      fetch('https://swapi.dev/api/films/').then(response => {
        return response.json();
      }).then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
  }*/
  //SAME THING WITH ASYNC/AWAIT
   async function fetchMoviesHandler(){
     setError(null);
     setIsLoading(true);
     try{
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Something went Wrong!');
      }
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
     } catch(error) {
        setError(error.message);
     }
     setIsLoading(false);
   }
  return (
    <div className="App">
      <div className="anime"></div>
        <button onClick={fetchMoviesHandler} className="movie__button">Fetch Movies</button>
      {!isLoading  && movies.length>0 && <Movie movie={movies}/>}
      {isLoading && <Ring />}
      {!isLoading && error && <p className="movie__listBox__error" >{error}</p>}
      {!isLoading && !error && movies.length === 0 && <p className = "movie__listBox">Found no Movies</p>}
    </div>
  );
}

export default App;
