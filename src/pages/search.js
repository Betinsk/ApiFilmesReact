import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/movieCard"

const moviesSearch = 'https://api.themoviesdb.org/3/search/movie'


const Search = () => {

    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get('q')

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzllNGRkNmE3NGNmOTU1Y2JlM2UwZmU0ODMwYzk5YyIsInN1YiI6IjY1YmFlMTkwNDU5YWQ2MDE3YTZhY2MzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmWWlGx6yqwRh6_3BedhLJYDkoxJ-25Rz_B63fO_z48'
        }
      };

    
      const getSearchMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
        .then(response => response.json())
        setMovies(data.results)
      }
     
      useEffect(() => {
    
        getSearchMovies()
    
      }, [query])
    
      console.log(movies)
    
    

    return (
        <div className="container">
          <h2 className="title"> Resultados para:
            <span className="queryText">{query}</span>
          </h2>
            <div className="moviesContainer">
              {movies.length === 0 && <p>Carregando...</p>}
            {
                movies.length > 0 && movies.map((movie) =>
                  <MovieCard key={movie.id} movie={movie}/>
                 )
            }
            </div>
        </div>
        )
}

export default Search