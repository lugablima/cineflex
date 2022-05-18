import "./style.css";
import TimeButton from "../TimeButton/TimeButton";

export default function Session({ session }) {
    return (
        <div className="session">
            <p>{session.weekday} - {session.date}</p>
            <div className="session-times">
                {session.showtimes.map((value, index) => <TimeButton key={index} sessionTime={value.name} sessionId={value.id} />)}
            </div>
        </div>
    );
}