import React from "react";
import EmojiPicker from "./EmojiPicker";
import { ReactComponent as SendSvg } from "../../../assets/send.svg";
import { ReactComponent as SmileSvg } from "../../../assets/smile.svg";

export default function index() {
  return (
    <div className="message-input-container">
      <div className="wide-input">
        <input type="text" placeholder="Type in your text" />
        <div className="buttons-container">
          <button className="emoji"> <SmileSvg /> </button>
          <button className="send">
            <SendSvg />
          </button>
        </div>
      </div>
          {/* <div className="buttons-container">
          <button className="emoji"> <SmileSvg /> </button>
          <button className="send">
            <SendSvg />
          </button>
        </div> */}
      <div className="emoji-chooser">
        <EmojiPicker />
      </div>
    </div>
  );
}
