import "../../assets/css/reset.css";
import "../../assets/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Sessions from "../Sessions/Sessions";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idMovie" element={<Sessions />} />
      </Routes>
    </BrowserRouter>
  );
}