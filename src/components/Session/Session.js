import "./style.css";
import TimeButton from "../TimeButton/TimeButton";

export default function Session({ sessionDate, sessionTime }) {
    return (
        <div className="session">
            <p>{sessionDate}</p>
            <div className="session-times">
                <TimeButton sessionTime={sessionTime} />
                <TimeButton sessionTime={sessionTime} />
                <TimeButton sessionTime={sessionTime} />
                <TimeButton sessionTime={sessionTime} />
            </div>
        </div>
    );
}