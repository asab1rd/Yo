import React, { useState } from "react";
import { classRemove } from "../../helpers";
import { useDispatch } from "react-redux";
import { TimelineMax } from "gsap";
import {
  setConvVisibility,
  setConvosVisibility,
} from "../../actions/designActions";
const PREVIEW_MESSAGE_CHARS = 25;
export default function Bubble({ conversation }) {
  const dispatch = useDispatch();

  const [isActive, setisActive] = useState(false);
  const user = conversation.users[1];
  const messagePreview = conversation.messages
    ? conversation.messages[0].content.substring(0, PREVIEW_MESSAGE_CHARS) +
      "..."
    : "No Message Yet";
  const handleBubble = () => {
    //SHOULD BE ONLY ON MOBILE
    setisActive(!isActive);
    classRemove("bubble", "active");

    //We can also add some fancy animations
    const tl = new TimelineMax({
      onStart: () => {
        document.getElementById("conversation").classList.remove("not-my-turn");
      },
      onComplete: () => {
        document
          .getElementById("conversations-picker")
          .classList.add("not-my-turn");
      },
    });
    tl.to(".conversations", { x: "-100%", opacity: 0 }).to(
      ".conversation",
      { x: "0", opacity: 1 },
      0,
    );
    //We must dispatch these actions to toggle visibility
    dispatch(setConvVisibility(true));
    dispatch(setConvosVisibility(false));
  };
  return (
    <div
      className={isActive ? "bubble active" : "bubble"}
      key={conversation.id}
      onClick={handleBubble}
    >
      <img className="avatar" src={user.avatar} />
      <div className="infos">
        <h3 className="name">{conversation.users[1].name}</h3>
        <p className="preview">{messagePreview}</p>
      </div>
    </div>
  );
}
