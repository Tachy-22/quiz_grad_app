import styled from "styled-components";

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 3rem;
  }
`;
