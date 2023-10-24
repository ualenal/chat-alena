import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const url = "http://localhost:8000/messages";

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username)
    if (username === null) {
      navigate("/auth");
    }
    const local_messages = localStorage.getItem("messages");
    if (!local_messages) {
      fetch(url, { method: "GET" })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setMessages(result);
          localStorage.setItem("messages", JSON.stringify(result));
        });
    }
    setMessages(JSON.parse(local_messages));
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const message_data = { 'user': username, 'message': message };
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(JSON.stringify(message_data)),
    }).then((response) => {
      const local_messages = JSON.parse(localStorage.getItem("messages"));
      local_messages.push(message_data);
      localStorage.setItem("messages", JSON.stringify(local_messages));
      setMessages(local_messages);
      setMessage('')
      return response.json();
    });
  };

  return (
    <section>
      <ul>
        <b>Чат</b>
        {messages.map((el, index) => {
          return (
            <li className="chat-row" key={index}>
              <div className="chat-name">{el.user}</div>
              <div className="chat-message">{el.message}</div>
            </li>
          );
        })}
      </ul>
      <form action="/chat" onSubmit={handleSubmit}>
        <div className="message">
          <label htmlFor="msg">
            <b>Сообщение</b>
          </label>
          <textarea
            placeholder="Введите сообщение.."
            name="msg"
            required=""
            rows="5"
            cols="33"
            onInput={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Отправить
        </button>
      </form>
    </section>
  );
}
