import React from "react";
import css from "./styles.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return <div className={css.BuildControls}>
    <BuildControl ortsNemeh = {props.ortsNemeh} type="salad" orts="Салад" />
    <BuildControl ortsNemeh = {props.ortsNemeh} type="bacon" orts="Гахайн мах" />
    <BuildControl ortsNemeh = {props.ortsNemeh} type="cheese" orts="Бяслаг" />
    <BuildControl ortsNemeh = {props.ortsNemeh} type="meat" orts="Үхрийн мах " />
  </div>;
};

export default BuildControls;
