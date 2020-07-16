import React, { useState } from "react";
import { classRemove } from "../../helpers";
import { useDispatch } from "react-redux";
import { TimelineMax } from "gsap";
import {
  setConvVisibility,
  setConvosVisibility,
} from "../../actions/designActions";
import { setCurrentConv } from "../../actions/convosActions";
import { animateConversationPick } from "../../helpers/animations";

const PREVIEW_MESSAGE_CHARS = 25;

export default function Bubble({ conversation, isActive }) {
  const dispatch = useDispatch();

  const user = conversation.users[1];
  const messagePreview = conversation.messages
    ? conversation.messages[0].content.substring(0, PREVIEW_MESSAGE_CHARS) +
      "..."
    : "No Message Yet";
  const handleBubble = () => {
    //SHOULD BE ONLY ON MOBILE
    classRemove("bubble", "active");

    //We can also add some fancy animations
    animateConversationPick("bubble");
    //We must dispatch these actions to toggle visibility
    dispatch(setConvVisibility(true));
    dispatch(setConvosVisibility(false));
    dispatch(setCurrentConv(conversation.id));
  };
  return (
    <div
      className={isActive ? "bubble active" : "bubble"}
      key={conversation.id}
      onClick={handleBubble}
    >
      <img className="avatar" src={user.avatar} alt={`${user.name} avatar`} />
      <div className="infos">
        <h3 className="name">{conversation.users[1].name}</h3>
        <p className="preview">{messagePreview}</p>
      </div>
    </div>
  );
}
