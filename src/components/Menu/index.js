import React from "react";
import css from "./styles.module.css";
import MenuItem from "../MenuItem";
import Shadow from "../General/Shadow"

const Menu = () => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem active link="/">
          ШИНЭ ЗАХИАЛГА{" "}
        </MenuItem>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
