import "./style.css";
import { Link } from "react-router-dom";

export default function Movie({ movieImg, movieId }) {

  return (
    <Link to={`/sessoes/${movieId}`}>
      <div className="movie">
        <img src={movieImg} alt="Filme em cartaz" />
      </div>
    </Link>
  );
}