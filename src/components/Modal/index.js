import React from "react";
import { ModalWrapper, ModalH1, ModalForm, ModalBtn } from "./ModalElements";

const Modal = ({ modalOpen, setModalOpen }) => {
  const closeModalHandler = () => {
    setModalOpen(false);
  };
  return (
    <ModalWrapper modalOpen={modalOpen}>
      <ModalH1>Do you want to continue?</ModalH1>
      <ModalForm>
        <ModalBtn>YES</ModalBtn>
        <ModalBtn className="negative" onClick={closeModalHandler}>
          NO
        </ModalBtn>
      </ModalForm>
    </ModalWrapper>
  );
};

export default Modal;
