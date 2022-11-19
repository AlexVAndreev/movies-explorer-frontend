import React from "react";

import "./Form.css";
function Form() {
  return (
    <>
      <form className="movies__form">
        <input
          type="text"
          className="movies__form-input"
          value=""
          placeholder="фильм"
          required
        />
        <button className="movies__form-button" type="button">
          {" "}
          {"| >"}
        </button>
      </form>
    </>
  );
}

export default Form;
