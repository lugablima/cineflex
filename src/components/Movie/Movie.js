// import "./style.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ movieImg, movieId }) {
  return (
    <Link to={`/sessoes/${movieId}`}>
      <Container>
        <img src={movieImg} alt="Filme em cartaz" />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: 145px;
  height: 209px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: #ffffff;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;