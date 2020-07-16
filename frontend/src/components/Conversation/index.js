import React from "react";
import Header from "./Head";
import Messages from "./Messages";
import Input from "./input";
import { useSelector } from "react-redux";
function Index() {
  const { convoVisibility } = useSelector((state) => state.mobileVisibility);
  return (
    <div
      // className={convoVisibility ? "conversation" : "conversation not-my-turn"}
      className="conversation"
      id="conversation"
    >
      <Header />
      <Messages />
      <Input />
    </div>
  );
}

export default Index;
