import React from "react";

import "./Form.css";
function Form({ searchMovie, inputError, inputText }) {
  const [inputValue, setInputValue] = React.useState(inputText);
  const handleChangeInput = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchMovie(inputValue);
  };
  return (
    <>
      <form className="movies__form">
        <input
          onChange={handleChangeInput}
          type="text"
          className="movies__form-input"
          value={inputValue}
          placeholder={
            inputError
              ? "произошла ошибка при выполнении запроса " +
                "сервер недоступен. Подождите "
              : "Фильмы"
          }
          required
        />
        <button
          onClick={handleSubmit}
          className="movies__form-button"
          type="button"
        >
          {" "}
          {"| >"}
        </button>
      </form>
    </>
  );
}

export default Form;
