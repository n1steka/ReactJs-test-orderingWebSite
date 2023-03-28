import React from "react";
import css from "./styles.module.css";

const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button className={css.Less}>Хасах</button>
      <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
        Нэмэх
      </button>
    </div>
  );
};

export default BuildControl;
