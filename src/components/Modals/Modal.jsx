import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

 const Modal = (props) => {
  const { open, children, handleClose, clses } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 z-[999999] grid items-center modal bg-[rgba(0,0,0,0.7)]`}
    >
      {children}
    </div>
  );
};

export default Modal;