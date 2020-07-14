import React from "react";

export default function Message({ message, sentByMe }) {
  return (
    <>
      <div className="content"> {message.content}</div>
    </>
  );
}
