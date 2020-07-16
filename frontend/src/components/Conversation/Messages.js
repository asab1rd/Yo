import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({ messages, sender }) {
  return (
    <div className="messages-container" id="messages-container">
      {messages.map((message) => (
        <div
          className={
            sender === message.sender ? "sentbyme message-box" : "message-box"
          }
          key={message.id}
        >
          {message.type === "text" && <Message message={message} />}
        </div>
      ))}
    </div>
  );
}
