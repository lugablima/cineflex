import "../../assets/css/reset.css";
import "../../assets/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Sessions from "../Sessions/Sessions";
import SeatsPage from "../SeatsPage/SeatsPage";
import SucessPage from "../SucessPage/SucessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idMovie" element={<Sessions />} />
        <Route path="/assentos/:idSession" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SucessPage />} />
      </Routes>
    </BrowserRouter>
  );
}