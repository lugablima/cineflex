import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Subheader from "../shared/Subheader/Subheader";
import Seats from "../Seats/Seats";
import Forms from "../Forms/Forms";
import Footer from "../shared/Footer/Footer";
import ImageLoading from "../shared/Styles/ImageLoading";
import loading from "../../assets/img/loading.gif";

export default function SeatsPage() {
  const API = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes";
  const { idSession } = useParams();
  const [session, setSession] = useState({});
  const [reservedSeats, setReservedSeats] = useState({ ids: [], name: "", cpf: "" });
  const [seatNames, setSeatNames] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${API}/${idSession}/seats`);
    promise.then((response) => {
      setSession(response.data);
    });
  }, []);

  function bookSeat(idSeat, seatName) {
    setReservedSeats({ ...reservedSeats, ids: [...reservedSeats.ids, idSeat] });
    setSeatNames([...seatNames, seatName]);
  }

  function cancelSeat(idSeat, seatName) {
    const newIds = reservedSeats.ids.filter((id) => id !== idSeat);
    const newSeats = seatNames.filter((name) => name !== seatName);
    setReservedSeats({ ...reservedSeats, ids: [...newIds] });
    setSeatNames([...newSeats]);
  }

  return (
    <Container>
      {session.name ? (
        <>
          <Subheader text={"Selecione o(s) assento(s)"} marginBottom={"21px"} />
          <Seats seats={session.seats} bookSeat={bookSeat} cancelSeat={cancelSeat} />
          <Forms
            reservedSeats={reservedSeats}
            setReservedSeats={setReservedSeats}
            session={session}
            seatNames={seatNames}
          />
          <Footer
            title={session.movie.title}
            movieImg={session.movie.posterURL}
            weekday={session.day.weekday}
            timeMovie={session.name}
          />
        </>
      ) : (
        <ImageLoading src={loading} margin={"calc(50% - 50px) auto 0"} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 108px 0 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;