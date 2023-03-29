import React from "react";
import css from "./styles.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem active link="/">
          Бургер{" "}
        </MenuItem>
        <MenuItem link="/">Төлбөр</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
