import styled from "styled-components";

export const Darkness = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 199;
  top: 0;
  left: 0;
  display: ${({ showBackdrop }) => (showBackdrop ? "block" : "none")};
`;
