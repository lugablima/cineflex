import "./style.css";
import Subheader from "../shared/Subheader/Subheader";
import Session from "../Session/Session";
import Footer from "../shared/Footer/Footer";

export default function Sessions() {
    return (
        <div className="sessions">
            <Subheader text="Selecione o horário" />
            <Session sessionDate="Quinta-feira - 24/06/2021" sessionTime="15:00" />
            <Session sessionDate="Sexta-feira - 25/06/2021" sessionTime="19:00" />
            <Footer />
        </div>
    );
}