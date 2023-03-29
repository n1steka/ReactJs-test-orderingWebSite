import React from "react";
import css from "./styles.module.css";
import logoImage from "../../assets/images/burger-logo.png";
const Logo = () => {
  return (
    <div className={css.Logo}>
      <img src={logoImage} />
    </div>
  );
};

export default Logo;
