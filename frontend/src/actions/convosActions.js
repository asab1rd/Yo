import { SET_CURRENT_CONV } from "./actionTypes";
import conversations from "../nodb/messages";

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
