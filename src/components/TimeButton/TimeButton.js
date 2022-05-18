import "./style.css";

export default function TimeButton({ sessionTime }) {
    return (
        <div className="time-button">
            <p>{sessionTime}</p>
        </div>
    );
}