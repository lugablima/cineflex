import "./style.css";
import movieImg from "../../../assets/img/image.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={movieImg} alt="Cartaz do filme escolhido" />
      </div>
      <div className="movie-info">
        <p>Enola Holmes</p>
        <p>Quinta-feira - 15:00</p>
      </div>
    </div>
  );
}
