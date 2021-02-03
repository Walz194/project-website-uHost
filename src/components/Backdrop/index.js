import React from "react";
import { Darkness } from "./BackdropElements";

const Backdrop = ({
  showBackdrop,
  setShowBackdrop,
  setModalOpen,
  setIsOpen,
}) => {
  const backdropHandler = () => {
    setShowBackdrop(false);
    setModalOpen(false);
    setIsOpen(false);
  };
  return (
    <Darkness showBackdrop={showBackdrop} onClick={backdropHandler}></Darkness>
  );
};

export default Backdrop;
