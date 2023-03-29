import React from "react";
import Button from "../General/Button";
const OrderSummary = (props) => {
  console.log(props.igNames);
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгсон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>Захиалгын дүн : {props.price}₮</p>
      <p>Цаашаа үргэлжлүүлэх үү ?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};

export default OrderSummary;
