import React from "react";
import css from "./styles.module.css";

const Shadow = (props) => {
  return props.show ? <div
  onClick={props.close}
   className={css.Shadow}></div> : null;
};

export default Shadow;
