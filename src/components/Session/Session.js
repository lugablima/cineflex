import styled from "styled-components";
import TimeButton from "../TimeButton/TimeButton";

export default function Session({ session }) {
  return (
    <Container>
      <p>
        {session.weekday} - {session.date}
      </p>
      <SessionTimes>
        {session.showtimes.map((value, index) => (
          <TimeButton key={index} sessionTime={value.name} sessionId={value.id} />
        ))}
      </SessionTimes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 6px 0 0 24px;
  margin-bottom: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
    margin-bottom: 28px;
  }
`;

const SessionTimes = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
`;