import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TimeButton({ sessionTime, sessionId }) {
  return (
    <Link to={`/assentos/${sessionId}`}>
      <Container>
        <p>{sessionTime}</p>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: 83px;
  height: 43px;
  border-radius: 3px;
  background: #e8833a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-decoration: none;
`;