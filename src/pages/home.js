import { useState, useEffect } from "react"
import MovieCard from "../components/movieCard"
const apiKey = 'f39e4dd6a74cf955cbe3e0fe4830c99c'

const moviesURL = 'https://api.themoviedb.org/3/movie'

const moviesSearch = 'https://api.themoviesdb.org/3/search/movie'




const Home = () => {

    const [topMovies, setTopMovies] = useState([])

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzllNGRkNmE3NGNmOTU1Y2JlM2UwZmU0ODMwYzk5YyIsInN1YiI6IjY1YmFlMTkwNDU5YWQ2MDE3YTZhY2MzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmWWlGx6yqwRh6_3BedhLJYDkoxJ-25Rz_B63fO_z48'
            }
          };
          
          const getTopRatedMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            setTopMovies(data.results)
          }

          useEffect(() => {

            getTopRatedMovies()

          }, [])

          console.log(topMovies)

    return (
        <div className="container">
          <h2 className="title"> Melhores Filmes:</h2>
            <div className="moviesContainer">
              {topMovies.length === 0 && <p>Carregando...</p>}
            {
                topMovies.length > 0 && topMovies.map((movie) =>
                  <MovieCard key={movie.id} movie={movie}/>
                 )
            }
            </div>
        </div>
    )
}

export default Home