import styled from "styled-components";

export default function Footer({ title, movieImg, weekday, timeMovie }) {
  return (
    <Container>
      <FooterImg>
        <img src={movieImg} alt="Cartaz do filme escolhido" />
      </FooterImg>
      <MovieInfo>
        <p>{title}</p>
        {weekday ? (
          <p>
            {weekday} - {timeMovie}
          </p>
        ) : null}
      </MovieInfo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 117px;
  border: 1px solid #9eadba;
  background: #dfe6ed;
  padding: 14px 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const FooterImg = styled.div`
  width: 64px;
  height: 89px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #ffffff;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MovieInfo = styled.div`
  width: calc(100% - 78px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;