import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyConversations } from "../../actions/userActions";

export default function Index() {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations.convos);
  const sender = conversations[0].users[0]; // Myself, Will change when i finish with a real connexion

  useEffect(() => {
    dispatch(getMyConversations());
  }, []);

  return <div className="conversations">
    {conversations && conversations.map(conversation=>( <div className="bubble" key={conversation.id}>

    </div> ))}
  </div>;
}
