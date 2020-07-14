import { GET_MY_CONVOS } from "./actionTypes";
import conversations from "../nodb/messages";
export function getMyConversations(username) {
  // I take only the conversations where I am
  const myConversations = conversations.filter(
    (conversation) =>
      conversation.users[0].username === username ||
      conversation.users[1].username === username,
  );
  return {
    type: GET_MY_CONVOS,
    payload: myConversations,
  };
}
