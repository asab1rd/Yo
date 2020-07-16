import React, { useEffect } from "react";
import Header from "./Head";
import Messages from "./Messages";
import Input from "./input";
import { useSelector } from "react-redux";
function Index() {
  const { convoVisibility } = useSelector((state) => state.mobileVisibility);
  let { current } = useSelector((state) => state.conversations);

  const sender = current.users ? current.users[0] : null;
  return (
    <div
      // className={convoVisibility ? "conversation" : "conversation not-my-turn"}
      className="conversation"
      id="conversation"
    >
      {current && sender && (
        <>
          <Header user={sender} />
          <Messages messages={current.messages} sender={sender} />
          <Input />
        </>
      )}
    </div>
  );
}

export default Index;
