import styled from "styled-components";
import Subheader from "../shared/Subheader/Subheader";
import Movies from "../Movies/Movies";

export default function Home() {
  return (
    <Container>
      <Subheader text="Selecione o filme" />
      <Movies />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 108px 0 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;