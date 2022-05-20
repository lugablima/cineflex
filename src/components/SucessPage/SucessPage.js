import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Button from "../shared/Button/Button";

function TicketInfo({ title, content }) {
  return (
    <TicketContainer>
      <p>{title}</p>
      {content.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </TicketContainer>
  );
}

export default function SucessPage() {
  const { state } = useLocation();
  const { reservedSeats, session } = state;

  return (
    <Container>
      <h6>Pedido feito com sucesso!</h6>
      <TicketInfo title="Filme e sessão" content={[session.movie.title, `${session.day.date} ${session.name}`]} />
      <TicketInfo title="Ingressos" content={reservedSeats.ids.map(id => `Assento ${id.toString().slice(-2)}`)}/>
      <TicketInfo title="Comprador" content={[`Nome: ${reservedSeats.name}`, `CPF: ${reservedSeats.cpf}`]} />
      <Button text="Voltar pra Home" margin={"20px 0 0"} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 94px;
  padding: 0 28px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h6 {
    width: 190px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247a6b;
    margin-bottom: 52px;
  }
`;

const TicketContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 42px;

  & > p {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }

  & > p:first-child {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 8px;
  }
`;
