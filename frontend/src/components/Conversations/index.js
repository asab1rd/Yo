import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyConversations } from "../../actions/userActions";
import SearchBar from "./searchBar";
import Bubble from "./Bubble";
export default function Index() {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations.convos);
  const sender = conversations[0].users[0]; // Myself, Will change when i finish with a real connexion
  useEffect(() => {
    dispatch(getMyConversations());
  }, []);

  return (
    <div className="conversations">
      <h2 className="title">Messages</h2>
      <SearchBar />
      <div className="container-name">
        <span>IMPORTANT</span>
      </div>
      <div className="convo-container">
        {conversations &&
          conversations.map((conversation) => (
            <Bubble conversation={conversation} key={conversation.id}  />
          ))}
      </div>
    </div>
  );
}
