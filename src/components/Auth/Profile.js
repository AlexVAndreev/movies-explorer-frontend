import React from "react";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import Header from "../Common/Header";

import { currentUserContext } from "../../Context/currentUserContext";
import { Validations } from "../../utils/Validations";
import * as mainApi from "../../utils/MainApi";

const Profile = ({ signOut, isLoggedIn }) => {
  const [hiddenInput, setHiddenInput] = React.useState(true);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [rightMessage, setRightMessage] = React.useState("");

  const { currentUser, setCurrentUser } = React.useContext(currentUserContext);

  const history = useHistory();

  const {
    values,
    setValues,
    setIsValid,
    isValid,
    handleChange,
    clearForm,
    validatorErrors,
  } = Validations(setErrorMessage, currentUser);

  React.useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [history, currentUser, setValues]);

  const handleOpenEdit = () => {
    setHiddenInput(false);
  };

  const clearEdit = () => {
    setErrorMessage("");
    setRightMessage("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsValid(false);

    mainApi
      .updateProfile(localStorage.getItem("jwt"), {
        name: values.name,
        email: values.email,
      })
      .then((res) => {
        setHiddenInput(true);
        setRightMessage("Данные изменены!");
        return setCurrentUser({ name: res.name, email: res.email });
      })
      .catch(() => {
        if (values.email === currentUser.email) {
          setErrorMessage("Почта уже используется!");
        }
      })
      .finally(() => {
        setTimeout(() => {
          clearForm();
          clearEdit();
        }, 2500);
      });
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>

        <form className="profile__form" onSubmit={handleSubmit}>
          <ul className="profile__about-list">
            <li className="profile__about-item">
              <p className="profile__data">
                <span className="profile__data-span">Имя</span>
              </p>
              <input
                id="name"
                name="name"
                className="profile__data"
                autoComplete="off"
                minLength="3"
                maxLength="30"
                type="text"
                required
                value={values.name}
                onChange={handleChange}
                disabled={hiddenInput}
              />
            </li>

            <li className="profile__about-item">
              <p className="profile__data">
                <span className="profile__data-span">E-mail</span>
              </p>
              <input
                id="email"
                name="email"
                className="profile__data"
                autoComplete="off"
                minLength="3"
                maxLength="30"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                value={values.email}
                onChange={handleChange}
                disabled={hiddenInput}
              />
            </li>
          </ul>
          <div className="profile__message">
            {validatorErrors &&
            Object.values(validatorErrors).filter((item) => item !== "")
              .length > 0
              ? Object.entries(validatorErrors).map((item, ind) => {
                  if (item[1] === "") item[0] = "";
                  if (item[0] === "email") item[0] = "Email:";
                  if (item[0] === "name") item[0] = "Имя:";
                  return (
                    <p
                      key={ind}
                      className="profile__message-text profile__message-text-error"
                    >
                      {`${item[0]} ${item[1]}`}
                    </p>
                  );
                })
              : ""}

            {errorMessage ? (
              <p className="profile__message-text profile__message-text-error">
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            {rightMessage ? (
              <p className="profile__message-text profile__message-text-right">
                {rightMessage}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="profile__buttons">
            {hiddenInput && (
              <button
                type="button"
                onClick={handleOpenEdit}
                className="profile__button"
              >
                Редактировать
              </button>
            )}

            {!hiddenInput && (
              <button
                type="submit"
                className="profile__button"
                disabled={!isValid}
              >
                Сохранить
              </button>
            )}

            <button
              onClick={signOut}
              className="profile__button profile__button_exit"
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
