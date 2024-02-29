import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { 
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import './movie.css'
import MovieCard from "../components/movieCard"

const Movie = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzllNGRkNmE3NGNmOTU1Y2JlM2UwZmU0ODMwYzk5YyIsInN1YiI6IjY1YmFlMTkwNDU5YWQ2MDE3YTZhY2MzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmWWlGx6yqwRh6_3BedhLJYDkoxJ-25Rz_B63fO_z48'
        }
      };
      
      const getMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, options)
        .then(response => response.json())
        setMovie(data)
      }

      const formatCurrency = (number) => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
      } 

      useEffect(() => {
        getMovie(movie)
      })

    return (
        <div className="moviePage">
            {movie && 
                <>
                    <MovieCard  movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline} </p>
                        <div className="info">
                            <h3>
                                <BsWallet2/>Orçamento
                            </h3>
                            <p>{formatCurrency(movie.budget)}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsGraphUp/>Receita
                            </h3>
                            <p>{formatCurrency(movie.revenue)}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsHourglassSplit/>Duração
                            </h3>
                            <p>{movie.runtime}</p>
                        </div>
                        <div className="info description">
                            <h3>
                                <BsFillFileEarmarkTextFill/>Descrição:
                            </h3>
                            <p>{movie.overview}</p>
                        </div>
                </>
              
            }
        </div>
    )
}

export default Movie