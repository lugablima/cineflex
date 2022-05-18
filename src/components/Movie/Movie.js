import "./style.css";
import movieImg from "../../assets/img/image.svg";

export default function Movie() {
    return (
        <div className="movie">
            <img src={movieImg} alt="Filme em cartaz" /> 
        </div>
    );
}