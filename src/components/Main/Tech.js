import React from "react";

import "./Tech.css";

import NavTab from "./NavTab";

function Tech(props) {
  return (
    <section className="tech page-wrapper" id="tech">
      <NavTab text="Технологии" />

      <h3 className="tech__title">7 технологий</h3>
      <p className="tech__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>

      <ul className="tech__list">
        <li className="tech__list-item">HTML</li>
        <li className="tech__list-item">CSS</li>
        <li className="tech__list-item">JS</li>
        <li className="tech__list-item">React</li>
        <li className="tech__list-item">Git</li>
        <li className="tech__list-item">Express.js</li>
        <li className="tech__list-item">MongoDB</li>
      </ul>
    </section>
  );
}

export default Tech;
