import React from "react";
import css from "./styles.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.daragdsan}
      className={`${css.Button} ${css[props.btnType]} `}
    >
      {props.text}
    </button>
  );
};

export default Button;
