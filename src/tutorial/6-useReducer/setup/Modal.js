import React, { useEffect } from "react";

const Modal = (modalContent) => {
  console.log(modalContent.modalContent);
  return (
    <div className="modal">
      <p>{modalContent.modalContent}</p>
    </div>
  );
};

export default Modal;
