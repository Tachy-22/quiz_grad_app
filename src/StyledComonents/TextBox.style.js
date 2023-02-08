import styled from "styled-components";

export const Textbox = styled.input`
  box-sizing: border-box;
  width: 30rem;
  height: 3rem;
  border: none;
  padding: 1.5rem 0.5rem;
  outline: 2px solid lightgrey;
  padding: 0.5rem 0.8rem;
  border-radius: 2px;
  margin:1rem 0rem;
  &:focus {
    outline: 3px solid #fcc822;
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
  align-items:center
  margin: 1rem;
  padding: 1.5rem 1rem;
  font-size: 1.2rem;
`;
