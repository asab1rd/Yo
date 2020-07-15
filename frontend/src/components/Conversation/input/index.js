import React, { useState } from "react";
import { ReactComponent as SendSvg } from "../../../assets/send.svg";
import { ReactComponent as SmileSvg } from "../../../assets/smile.svg";
import Picker from "emoji-picker-react";

export default function Index() {
  const [isEmojiPickerOpen, setisEmojiPickerOpen] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const onEmojiClick = (event, { emoji }) => {
    //We want to get the emoji on our input value and close the picker
    setisEmojiPickerOpen(!isEmojiPickerOpen);
    setinputValue(`${inputValue + emoji} `);
  };
  //es6 style event.target.value
  const onInputChange = ({ target: { value } }) => {
    setinputValue(value);
  };
  return (
    <div className="message-input-container">
      <div className="wide-input">
        <input
          type="text"
          placeholder="Type in your text"
          value={inputValue}
          onChange={onInputChange}
        />
        <div className="buttons-container">
          <button
            className="emoji"
            onClick={() => setisEmojiPickerOpen(!isEmojiPickerOpen)}
          >
            {" "}
            <SmileSvg />{" "}
          </button>
          <button className="send">
            <SendSvg />
          </button>
        </div>
      </div>
      {isEmojiPickerOpen && (
        <div className="emoji-chooser">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}
