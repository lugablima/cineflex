import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <Content>
        <h1>CINEFLEX</h1>
        {(location.pathname === "/") ? null : <ion-icon name="arrow-back-circle-outline" onClick={() => navigate(-1)}></ion-icon>}
      </Content>
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
`;

const Content = styled.div`
  width: calc(100% - 48px);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > h1 {
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
  }

  & > ion-icon {
    font-size: 40px;
    color: #E8833A;
    position: absolute;
    top: 0;
    left: 0;
  }
`;