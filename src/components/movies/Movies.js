import React from "react";

import "./Movies.css";
import Checkbox from "../Common/Checkbox";
import Header from "../Common/Header";
import Form from "../Common/Form";
import Footer from "../Common/Footer";
import MoviesCardList from "./MoviesCardList";

function Movies() {
  return (
    <>
      <Header />
      <Form />
      <Checkbox />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
