import styled from "styled-components";

export default function SeatInfo({ background, borderColor, text }) {
  return (
    <Container>
      <Seat background={background} borderColor={borderColor}></Seat>
      <p>{text}</p>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: auto;
  /* height: 31.5px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;

const Seat = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 17px;
  margin-bottom: 7.5px;
  background: ${(props) => props.background};
`;