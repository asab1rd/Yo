import React, { useEffect } from "react";
import { getMyConversations } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";

export default function Messages() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.conversations.convos);
  const sender = state[0].users[0];
  useEffect(() => {
    dispatch(getMyConversations());
  }, []);

  return (
    <div className="messages-container" id="messages-container">
      {state &&
        state[0] &&
        state[0].messages &&
        state[0].messages.map((message) => (
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
