import styled from "styled-components";

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  @media (max-width: 960px) {
    display: none;
  }
`;
