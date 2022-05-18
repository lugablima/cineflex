import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import loading from "../../assets/img/loading.gif";

export default function Movies() {
    const API = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${API}`);
        promise
            .then((response) => {
                setMovies(response.data);
            });
    }, []);

    return (
        <div className="movies">
            {(movies.length === 0) ? 
            <img src={loading} alt="Caregando..." /> : 
            movies.map((movie, index) => <Movie key={index} movieImg={movie.posterURL} movieId={movie.id} />)}
        </div>
    );
}