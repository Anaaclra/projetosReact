import { Container } from "./style";
import { Movielist } from "./style";
import { Movie } from "./style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";



function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2991304cd890b434863fd6bfba05e94c&language=en-US&page=1`)

    }, [])

    /*const movies = [

        {
            title: "A Viagem de Chiriro",
            image_url: "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg"
        },

        {
            title: "A Viagem de Chiriro 2",
            image_url: "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg"
        },

        {
            title: "A Viagem de Chiriro 3",
            image_url: "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg"
        }

    ]*/



    return (
        <Container>
            <h2>Catálogo</h2>
            <Movielist>
                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://www.google.com">
                                    <img src={movie.image_url} alt={movie.title} />
                                </a>
                                <span>{movie.title}</span>
                            </Movie>

                        )
                    })
                }

            </Movielist>
        </Container>
    )
}

export default Home;