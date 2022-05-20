import styled from "styled-components";
import SeatInfo from "./SeatInfo";

export default function SeatsInfo() {
  return (
    <Container>
      <SeatInfo background="#8DD7CF" borderColor="#1AAE9E" text="Selecionado" />
      <SeatInfo background="#C3CFD9" borderColor="#7B8B99" text="Disponível" />
      <SeatInfo background="#FBE192" borderColor="#F7C52B" text="Indisponível" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
`;