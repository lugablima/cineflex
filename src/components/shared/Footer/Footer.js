import "./style.css";

export default function Footer({ title, movieImg, weekday, timeMovie }) {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={movieImg} alt="Cartaz do filme escolhido" />
      </div>
      <div className="movie-info">
        <p>{title}</p>
        {(weekday) ? <p>{weekday} - {timeMovie}</p> : null}
      </div>
    </div>
  );
}