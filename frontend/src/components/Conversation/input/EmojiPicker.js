import React, { useState } from "react";
import Picker from "emoji-picker-react";

export default () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <>
      <Picker onEmojiClick={onEmojiClick} />
    </>
  );
};
