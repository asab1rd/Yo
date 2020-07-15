import React, { useState } from "react";
import { classRemove } from "../../helpers";
const PREVIEW_MESSAGE_CHARS = 25;
export default function Bubble({ conversation }) {
  const [isActive, setisActive] = useState(false);
  const user = conversation.users[1];
  const messagePreview = conversation.messages
    ? conversation.messages[0].content.substring(0, PREVIEW_MESSAGE_CHARS) +
      "..."
    : "No Message Yet";
  const toggleActive = () => {
    setisActive(!isActive);
    classRemove("bubble", "active");
  };
  return (
    <div
      className={isActive ? "bubble active" : "bubble"}
      key={conversation.id}
      onClick={toggleActive}
    >
      <img className="avatar" src={user.avatar} />
      <div className="infos">
        <h3 className="name">{conversation.users[1].name}</h3>
        <p className="preview">{messagePreview}</p>
      </div>
    </div>
  );
}
