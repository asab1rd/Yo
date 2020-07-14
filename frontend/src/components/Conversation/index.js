import React from "react";
import Header from "./Head";
import Messages from "./Messages";
function index() {
  return (
    <div className="conversation">
      <Header />
      <Messages />
    </div>
  );
}

export default index;
