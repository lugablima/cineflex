import styled from "styled-components";
import { useState } from "react";

export default function Seat({ seat, bookSeat, cancelSeat }) {
    const availableBack = "#C3CFD9";
    const notAvailableBack = "#FBE192";
    const selectedBack = "#8DD7CF"; 
    const availableBorder = "#7B8B99";
    const notAvailableBorder = "#F7C52B";
    const selectedBorder = "#1AAE9E"; 
    const seatNumber = (Number(seat.name) < 10) ? seat.name.padStart(2, "0") : seat.name;   
    // const seatBackground = (seat.isAvailable) ? "#C3CFD9" : "#FBE192";
    // const seatBorder = (seat.isAvailable) ? "#808F9D" : "#F7C52B";
    const [background, setBackground] = useState(initializeBackground());
    const [border, setBorder] = useState(initializeBorder());

    function initializeBackground() {
      if(seat.isAvailable) {
        return availableBack;
      }
      return notAvailableBack;
    }
    
    function initializeBorder() {
      if(seat.isAvailable) {
        return availableBorder;
      }
      return notAvailableBorder;
    }

    function selectSeat() {
      if(background === availableBack) {
        setBackground(selectedBack);
        setBorder(selectedBorder);
        bookSeat(seat.id);
      } else if(background === selectedBack){
        setBackground(availableBack);
        setBorder(availableBorder);
        cancelSeat(seat.id);
      } else {
        alert("Esse assento não está disponível");
      }
    }

    return(
        <Container background={background} borderColor={border} onClick={selectSeat}>
            <p>{seatNumber}</p>
        </Container>
    );
}

const Container = styled.div`
  width: 26px;
  height: 26px;
  border: 1px solid ${props => props.borderColor};
  border-radius: 12px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;
  }
`;