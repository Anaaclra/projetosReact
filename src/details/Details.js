
import { useParams } from "react-router-dom";
import { APIKey } from "../config/key";
import { useState, useEffect } from "react";








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
                    poster_path: `${img_path}${data.poster_path}`
                }

                setMovies(movie)
            })
    }, [id])



    return (
        <div>
            <img src={movie.poster_path} alt={movie.title} />
            <h1>{movie.title}</h1>
            <span>Sinopse: {movie.overview}</span>
            <span>Data de Lançamento: {movie.releaseDate}</span>
            <button>Retornar ao Catálogo</button>
        </div>
    )
}

export default Details;