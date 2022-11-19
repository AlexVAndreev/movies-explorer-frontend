import React from "react";

import "./Checkbox.css";

function Checkbox() {
  return (
    <>
      <label className="checkbox">
        <input className="checkbox__input-invisible" type="checkbox" />
        <span className="checkbox__input-visible" />

        <span className="checkbox__label">Короткометражки</span>
      </label>
    </>
  );
}

export default Checkbox;
