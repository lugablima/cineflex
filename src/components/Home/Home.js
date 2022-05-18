import "./style.css";
import Subheader from "../shared/Subheader/Subheader";
import Movies from "../Movies/Movies";

export default function Home() {

    return (
        <div className="home">
            <Subheader text="Selecione o filme" />
            <Movies />
        </div>
    );
}