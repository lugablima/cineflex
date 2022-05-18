import "./style.css";
import Movies from "../Movies/Movies";

export default function Home() {
    return (
        <div className="home">
            <h6>Selecione o filme</h6>
            <Movies />
        </div>
    );
}