import React from "react";
import css from "./styles.module.css";
import BuildControl from "../BuildControl";
import { computeHeadingLevel } from "@testing-library/react";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бүргэрийн үнэ : <strong> {props.price} </strong>
      </p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disbaled={props.disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        Захилах
      </button>
    </div>
  );
};

export default BuildControls;
