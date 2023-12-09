
import { useParams } from "react-router-dom";
import { APIKey } from "../config/key";
import { useState, useEffect } from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";









function Details() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'

    const { id } = useParams();
    console.log(id);

    const [movie, setMovies] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    releaseDate: data.release_data,
                    vote_average: data.vote_average,
                    vote_count: data.vote_count,
                    poster_path: `${img_path}${data.poster_path}`
                }

                setMovies(movie)
            })
    }, [id])



    return (
        <Container>

        <div className="details">
            <img src={movie.poster_path} alt={movie.title} />
          
            <div className="info">
                <h1>{movie.title}</h1>
                <span>Sinopse: {movie.overview}</span>
                <span className="release">Data de Lançamento: {movie.releaseDate}</span>
                <span>Avaliação: {movie.vote_average}</span>
                <span>Likes: {movie.vote_count}</span>

                <Link to="/"><button>Retornar ao Catálogo</button></Link>
            </div>
        </div>

        </Container>
    )
}

export default Details;