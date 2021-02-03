import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: white;
  display: ${({ modalOpen }) => (modalOpen ? "block" : "none")};
  position: fixed;
  border: 1px solid #ccc;
  width: 40%;
  z-index: 200;
  top: 20%;
  left: 30%;
  padding: 1rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const ModalH1 = styled.h1`
  text-align: center;
  margin: 0 0 1rem 0;
`;

export const ModalForm = styled.div`
  text-align: center;
`;
export const ModalBtn = styled.button`
  text-decoration: none;
  font: inherit;
  border: 1px solid #0e4f1f;
  color: white;
  background: #0e4f1f;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 5px;
  &.negative {
    background: red;
    border-color: red;
    &:hover,
    &:active {
      background: #ff5454;
      border-color: #ff5454;
    }
  }
  &:hover,
  &:active {
    background: #2ddf5c;
    border-color: #2ddf5c;
  }
`;
