import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../shared/Button/Button";

export default function Forms({ reservedSeats, setReservedSeats, session, seatNames }) {
  const API = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  function handleCPF(event) {
    const cpf = event.target.value;
    if ((cpf.length === 3 || cpf.length === 7) && key !== "Backspace") {
      setReservedSeats({ ...reservedSeats, cpf: cpf + "." });
    } else if (cpf.length === 11 && key !== "Backspace") {
      setReservedSeats({ ...reservedSeats, cpf: cpf + "-" });
    } else {
      setReservedSeats({ ...reservedSeats, cpf: cpf });
    }
  }

  function validateName(name) {
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-']+$/;
    const isValid = name.split(" ").every((value) => regex.test(value));
    return isValid;
  }

  function validateCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return regex.test(cpf);
  }

  function submitForm(event) {
    event.preventDefault();

    if (reservedSeats.ids.length !== 0) {
      if (validateName(reservedSeats.name)) {
        if (validateCPF(reservedSeats.cpf)) {
          const promise = axios.post(`${API}`, reservedSeats);
          promise.then(() => {
            navigate("/sucesso", { state: { reservedSeats: reservedSeats, session: session, seatNames: seatNames } });
          });
        } else {
          alert("CPF inválido, tente novamente!");
        }
      } else {
        alert("Nome inválido, tente novamente!");
      }
    } else {
      alert("Escolha pelo menos um assento!");
    }
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
          onChange={handleCPF}
          onKeyDown={(e) => setKey(e.key)}
        />
        <Button type="submit" text="Reservar assento(s)" margin={"48px auto 0"} />
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 48px);
  height: auto;

  input {
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