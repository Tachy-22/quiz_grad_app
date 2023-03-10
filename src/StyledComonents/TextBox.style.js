import styled from "styled-components";

export const Textbox = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 1.5rem 0.5rem;
  outline: 2px solid lightgrey;
  border-radius: 2px;
  margin: 1rem 0rem;
 
  &:focus {
    border-left: 0.4rem solid #fcc822;
    border-radius: 0;
    color:#fcc822;
  }
  &::placeholder {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color:light-gray;
 
`;

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
