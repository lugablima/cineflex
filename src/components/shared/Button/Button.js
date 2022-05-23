import styled from "styled-components";

export default function Button({ text, margin }) {
  
  return <Container margin={margin}>{text}</Container>;
}

const Container = styled.button`
  width: 81.82%;
  min-width: 225px;
  height: 42px;
  border-radius: 3px;
  border: none;
  margin: ${props => props.margin};
  padding: 0;
  background: #e8833a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;