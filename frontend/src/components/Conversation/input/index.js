import React, { useState } from "react";
import { ReactComponent as SendSvg } from "../../../assets/send.svg";
import { ReactComponent as SmileSvg } from "../../../assets/smile.svg";
import Picker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../../actions/convosActions";
import { getMyConversations } from "../../../actions/userActions";
export default function Index() {
  const [isEmojiPickerOpen, setisEmojiPickerOpen] = useState(false);
  const [inputValue, setinputValue] = useState("");
  let { current } = useSelector((state) => state.conversations);
  const dispatch = useDispatch();

  const onEmojiClick = (event, { emoji }) => {
    //We want to get the emoji on our input value and close the picker
    setisEmojiPickerOpen(!isEmojiPickerOpen);
    setinputValue(`${inputValue + emoji} `);
  };
  //es6 style event.target.value
  const onInputChange = ({ target: { value } }) => {
    setinputValue(value);
  };

  //send message
  const handleSend = () => {
    console.log("hahahaha");
    if (!inputValue) {
      return;
    }
    //We take the last message and I only change the id, content & the date
    const message = current.messages[0];
    message.id = message.id + Math.random() * 25;
    message.content = inputValue;
    message.date = new Date();
    const convoId = message.convoId;
    dispatch(sendMessage(convoId, message));
    dispatch(getMyConversations());
    setinputValue("");
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
          <button className="send" onClick={handleSend}>
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
