import {
  GET_CONVOS,
  GET_MIN_CONVOS,
  GET_MY_CONVOS,
  GET_MESSAGES,
  GET_FAVS,
  SEND_MESSAGE,
  SEARCH_CONVO,
} from "../actions/actionTypes";
import initial from "../nodb/messages";

export default function (state = { convos: initial }, { type, payload }) {
  switch (type) {
    case GET_CONVOS:
      return { ...state, convos: payload };
      break;
    case GET_MY_CONVOS:
      return { ...state, convos: payload };
      break;
    case GET_MESSAGES:
      return { ...state, messages: payload };
      break;
    case SEND_MESSAGE:
      return { ...state, messages: payload };
      break;
    case GET_FAVS:
      return { ...state, convos: payload };
      break;
    case SEARCH_CONVO:
      return { ...state, convos: payload };
      break;
    default:
      return state;
      break;
  }
}
