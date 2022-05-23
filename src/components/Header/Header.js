import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>CINEFLEX</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  h1 {
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
  }
`;