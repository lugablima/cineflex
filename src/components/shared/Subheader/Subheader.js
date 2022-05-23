import styled from "styled-components";

export default function Subheader({ text, marginBottom }) {
  return <Container marginBottom={marginBottom}>{text}</Container>;
}

const Container = styled.h6`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #293845;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "41px"};
`;