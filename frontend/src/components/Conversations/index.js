import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyConversations } from "../../actions/userActions";
import SearchBar from "./searchBar";
import Bubble from "./Bubble";
export default function Index() {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations.convos);
  const activeConvoId = useSelector((state) => state.conversations.current.id);
  useEffect(() => {
    dispatch(getMyConversations());
  }, []);

  return (
    <div
      // className={
      //   convosVisibility ? "conversations" : "conversations not-my-turn"
      // }
      className="conversations"
      id="conversations-picker"
    >
      <h2 className="title">Messages</h2>
      <SearchBar />
      <div className="container-name">
        <span>IMPORTANT</span>
      </div>
      <div className="convo-container">
        {conversations &&
          conversations.map((conversation) => (
            <Bubble
              conversation={conversation}
              isActive={conversation.id === activeConvoId}
              key={conversation.id}
            />
          ))}
      </div>
    </div>
  );
}
