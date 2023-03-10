import styled from "styled-components";
import BackgroundImg from "../img/vecteezy_light-gray-abstract-with-white-and-gray-diagonal-rounded_7718244.jpg";
export const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const LandingPageMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 570px) {
    padding: 0rem;
  }
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  width: 70%;
  height: 70%;
  padding: 2.5rem;
  gap: 1rem;
  @media (max-width: 576px) {
    margin-top: 3rem;
    overflow-y: scroll;
    min-height: 70vh;
    padding: 1rem;
  }
`;
