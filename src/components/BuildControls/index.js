import React from "react";
import css from "./styles.module.css";
import BuildControl from "../BuildControl";
import { computeHeadingLevel } from "@testing-library/react";

const BuildControls = (props) => {
  const controls = {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салат",
  };
  return (
    <div className={css.BuildControls}>
      <p>
        Бүргэрийн үнэ : <strong> {props.price} </strong>
      </p>
      {Object.keys(controls).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disbaled={props.disabledIngredients}
          type={el}
          orts={controls[el]}
        />
      ))}

      <button disabled={props.disabled}  className={css.OrderButton}>Захилах</button>
    </div>
  );
};

export default BuildControls;
