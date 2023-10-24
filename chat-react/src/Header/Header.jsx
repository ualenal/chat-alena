import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="link" to="/chat">
              Чат
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
