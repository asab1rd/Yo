import React from "react";
import Header from "./Head";
import Messages from "./Messages";
import Input from "./input";
function index() {
  return (
    <div className="conversation">
      <Header />
      <Messages />
      <Input />
    </div>
  );
}

export default index;
