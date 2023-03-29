import React from "react";

const OrderSummary = (props) => {
  console.log(props.igNames);
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгсон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el} >
            {props.ingredientsNames[el]}  : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>Цаашаа үргэлжлүүлэх үү ?</p>
    </div>
  );
};

export default OrderSummary;
