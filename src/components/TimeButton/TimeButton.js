import "./style.css";
import { Link } from "react-router-dom";

export default function TimeButton({ sessionTime, sessionId }) {
  return (
    <Link to={`/assentos/${sessionId}`}>
      <div className="time-button">
        <p>{sessionTime}</p>
      </div>
    </Link>
  );
}
