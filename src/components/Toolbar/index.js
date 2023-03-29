import React from "react";
import css from "./styles.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
const Toolbar = () => {
  return (
    <header className={css.Toolbar}>
      <div>...</div>
      <div>
        <Logo />
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
};

export default Toolbar;
