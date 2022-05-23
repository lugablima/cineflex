import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Subheader from "../shared/Subheader/Subheader";
import ImageLoading from "../shared/Styles/ImageLoading";
import Session from "../Session/Session";
import Footer from "../shared/Footer/Footer";
import loading from "../../assets/img/loading.gif";

export default function Sessions() {
  const API = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

  const [sessions, setSessions] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});
  const { idMovie } = useParams();

  useEffect(() => {
    const promise = axios.get(`${API}/${idMovie}/showtimes`);
    promise.then((response) => {
      setSessions(response.data.days);
      setMovieInfo(response.data);
    });
  }, []);

  return (
    <Container>
      <Subheader text="Selecione o horário" />
      {sessions.length === 0 ? (
        <ImageLoading src={loading} alt="Carregando..." margin={"0"} />
      ) : (
        sessions.map((session, index) => <Session key={index} session={session} />)
      )}
      {sessions.length === 0 ? null : <Footer title={movieInfo.title} movieImg={movieInfo.posterURL} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 108px 0 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;