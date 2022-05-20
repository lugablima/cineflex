import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button/Button";

export default function Forms({ reservedSeats, setReservedSeats, session }) {
  const API = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    const promise= axios.post(`${API}`, reservedSeats);
      promise
        .then(() => {
          navigate("/sucesso", { state: { reservedSeats: reservedSeats, session: session } });
          console.log(reservedSeats);
        })
  }

  return (
    <Container>
      <form onSubmit={submitForm}>
        <Label>Nome do comprador:</Label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          required
          value={reservedSeats.name}
          onChange={(e) => setReservedSeats({ ...reservedSeats, name: e.target.value })}
        />
        <Label>CPF do comprador:</Label>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          required
          value={reservedSeats.cpf}
          onChange={(e) => setReservedSeats({ ...reservedSeats, cpf: e.target.value })}
        />
        <Button type="submit" text="Reservar assento(s)" margin={"48px auto 0"} />
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 48px);
  height: auto;
  /* margin-bottom: 48px; */

  input {
    /* width: 327px; */
    width: 100%;
    height: 51px;
    border-radius: 3px;
    border: 1px solid #d5d5d5;
    background: #ffffff;
    outline: none;
    margin-bottom: 9px;
    padding-left: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    color: #293845;
  }

  input::placeholder {
    font-style: italic;
    color: #afafaf;
  }
`;

const Label = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #293845;
  margin-bottom: 3px;
`;
