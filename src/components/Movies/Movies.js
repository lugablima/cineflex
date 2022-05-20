// import "./style.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import ImageLoading from "../shared/Styles/ImageLoading";
import loading from "../../assets/img/loading.gif";

export default function Movies() {
  const API = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${API}`);
    promise.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <Container>
      {movies.length === 0 ? (
        <ImageLoading src={loading} alt="Caregando..." margin={"0 auto"} />
      ) : (
        movies.map((movie, index) => <Movie key={index} movieImg={movie.posterURL} movieId={movie.id} />)
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 85.33%;
  height: auto;
  min-width: 320px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 11px;
  column-gap: 28px;
`;