import { SET_CURRENT_CONV, SEND_MESSAGE } from "./actionTypes";
import conversations from "../nodb/messages";
import users from "../nodb/users";
/**
 * Change the current conversation state
 * @param {Sting} convId ConversationId
 */
export function setCurrentConv(convId) {
  const currentConvo = conversations.filter(
    (conversation) => conversation.id === convId,
  );
  return {
    type: SET_CURRENT_CONV,
    payload: currentConvo[0],
  };
}

// Must change if we create Group Functionnality
export function sendMessage(convoId, message) {
  //Only the current convo
  let currentConvo = conversations.filter(
    (conversation) => conversation.id === convoId,
  );
  currentConvo = currentConvo[0];
  currentConvo.messages.unshift(message);
  //We also want to update all convos variable, we wouldn't do that with a real application
  // const convos = conversations.filter(
  //   (conversation) => conversation.id !== convoId,
  // );
  return {
    type: SEND_MESSAGE,
    payload: { convos: conversations, current: currentConvo },
  };
}
