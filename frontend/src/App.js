import React from "react";
import "./style/App.scss";
import conversations from "./nodb/messages";
import users from "./nodb/users";
import { useSelector, useDispatch } from "react-redux";
import { getMyConversations } from "./actions/userActions";
import Header from "./components/Navigation/Header";
import Conversation from "./components/Conversation";
import Conversations from "./components/Conversations";

function App() {
  const conversations = useSelector((state) => state.conversations.convos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Conversations />
      <Conversation />
    </div>
  );
}

export default App;
