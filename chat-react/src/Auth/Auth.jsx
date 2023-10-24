import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const url = "http://localhost:8000/auth";
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(JSON.stringify({ name: name, password: password })),
    }).then((response) => {
      localStorage.setItem("username", name);
      localStorage.setItem("passowrd", password);
      return navigate("/");
    });
  };

  return (
    <section>
      <form action="/auth" onSubmit={handleSubmit} className="auth-form">
        <div className="form-row">
          <label htmlFor="name">
            <b>Имя</b>
          </label>
          <input
            type="text"
            name="name"
            onInput={(e) => setName(e.target.value)}
            value={name}
            minLength={10}
            maxLength={20}
          />
        </div>
        <div className="form-row">
          <label htmlFor="msg">
            <b>Пароль</b>
          </label>
          <input
            type="password"
            name="password"
            onInput={(e) => setPassword(e.target.value)}
            value={password}
            minLength={8}
            maxLength={20}
          />
        </div>
        <button type="submit" className="btn">
          Отправить
        </button>
      </form>
    </section>
  );
}
