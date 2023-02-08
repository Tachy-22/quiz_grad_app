import styled from "styled-components";

export const Button1 = styled.button`
  width: 6rem;
  height: 3rem;
  background: #fcc822;
  color: white;
  font-size: 1.1rem;
  border: none;
  outline: 2px solid #fcc822;
  border-radius: 2px;
  &:active {
    webkit-box-shadow: 0px 9px 5px 7px rgba(0,0,0,0.06);
-moz-box-shadow: 0px 9px 5px 7px rgba(0,0,0,0.06);
box-shadow: 0px 9px 5px 7px rgba(0,0,0,0.06);
`;

export const Button2 = styled.button`
  width: 6rem;
  height: 3rem;
  background: white;
  color: #fcc822;
  font-size: 1.1rem;
  border: none;
  outline: 2px solid #fcc822;

  border-radius: 2px;
  &:active {
    webkit-box-shadow: 0px 9px 5px 7px rgba(0, 0, 0, 0.06);
    -moz-box-shadow: 0px 9px 5px 7px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 9px 5px 7px rgba(0, 0, 0, 0.06);
  }
`;
