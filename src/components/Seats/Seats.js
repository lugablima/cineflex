import styled from "styled-components";
import Seat from "./Seat";
import SeatsInfo from "./SeatsInfo";

export default function Seats({ seats, bookSeat, cancelSeat }) {
  return (
    <Container>
      <SeatsContent>
        {seats.map((seat, index) => (
          <Seat key={index} seat={seat} bookSeat={bookSeat} cancelSeat={cancelSeat} />
        ))}
      </SeatsContent>
      <SeatsInfo />
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 48px);
  height: auto;
  margin-bottom: 47.5px;
  display: flex;
  flex-direction: column;
`;

const SeatsContent = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 18px;
  column-gap: 7px;
`;