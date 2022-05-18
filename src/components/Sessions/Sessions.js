import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Subheader from "../shared/Subheader/Subheader";
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
    <div className="sessions">
      <Subheader text="Selecione o horário" />
      {(sessions.length === 0) ? 
      <img src={loading} alt="Carregando..." /> : 
      sessions.map((session, index) => <Session key={index} session={session} />)}
      {(sessions.length === 0) ? null : <Footer title={movieInfo.title} movieImg={movieInfo.posterURL} />}
    </div>
  );
}