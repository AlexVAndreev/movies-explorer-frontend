import React from "react";

import "./Checkbox.css";

function Checkbox({ handleToggleCheckBox, isCheckBoxOpen}) {
  return (
    <>
      <label className="checkbox">
        <input className="checkbox__input-invisible" type="checkbox" checked={isCheckBoxOpen?"checked":''}/>
        <span
          onClick={handleToggleCheckBox}
          className="checkbox__input-visible"
        />

        <span onClick={handleToggleCheckBox} className="checkbox__label">
          Короткометражки
        </span>
      </label>
    </>
  );
}

export default Checkbox;
