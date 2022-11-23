import "./AboutMe.css";
import photo from "../../images/ryan.jpg";
import NavTab from "./NavTab";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <NavTab text="Студент" />
      <div className="aboutme__wrapper">
        <img
          src={photo}
          className="aboutme__photo"
          alt="Klassnoe foto rayana goslinga"
        ></img>
        <h3 className="aboutme__name">Александр</h3>
        <p className="aboutme__proffesion">Инженер</p>
        <p className="aboutme__description">
          Яродился и живу в Алтайском крае,закончил Алтайской государственный
          университет.У меня есть жена и три сына. Занимась охотой и
          дрессировкой собак. Программированием занимаюсь уже давно но в веб
          програмировании это первый опыт.
        </p>
        <a className="aboutme__github" href="https://github.com/AlexVAndreev/">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
