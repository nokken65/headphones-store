import styled from "styled-components";
import { HeaderBackground } from "./HeaderBackground";

export const Header = () => {
  return (
    <Wrapper>
      <HeaderBackground />
      <h1>nav menu</h1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 100;
  margin: 16px;
  right: 16px;
  left: 16px;
  height: 60px;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
`;
