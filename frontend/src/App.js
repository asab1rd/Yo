import React from "react";
import "./style/App.scss";
import conversations from "./nodb/messages";
import users from "./nodb/users";
import { useSelector, useDispatch } from "react-redux";
import { getMyConversations } from "./actions/userActions";
function App() {
  const conversations = useSelector((state) => state.conversations.convos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      HELLO THIS IS THE BEGINNING OF YO.
      <button
        onClick={() =>
          dispatch(getMyConversations(conversations[0].users[1].username))
        }
      >
        {" "}
        GET ONLY MY MESSAGES
      </button>
      {conversations &&
        conversations.map((conversation) => (
          <div className="conversation" key={conversation.id}>
            {conversation.name || conversation.users[1].name}
          </div>
        ))}
    </div>
  );
}

export default App;
