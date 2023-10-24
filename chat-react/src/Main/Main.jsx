import React from "react";
import { Link } from "react-router-dom";
import Cat from "./images/artleo.jpg";

export default function Main() {
  return (
    <section>
      <div className="left">
        <h2>Это главная страница сайта.</h2>
        <p>
            Для общения переходите в <Link to="/chat"> чат.</Link>
        </p>
      </div>
      <div className="right">
        <img src={Cat} alt="Котейка" />
      </div>
    </section>
  );
}
