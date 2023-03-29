import React from "react";
import Shadow from "../Shadow";
import css from "./styles.module.css";

const Modal = (props) => {
  return (
    <div>
      <Shadow show={props.show}   close={props.close} />
      <div
       
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={css.Modal}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Modal;
