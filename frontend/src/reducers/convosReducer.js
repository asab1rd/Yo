import {
  GET_CONVOS,
  GET_MIN_CONVOS,
  GET_MY_CONVOS,
  GET_MESSAGES,
  GET_FAVS,
  SEND_MESSAGE,
  SEARCH_CONVO,
  SET_CURRENT_CONV,
} from "../actions/actionTypes";
import conversations from "../nodb/messages";

const initialState = {
  convos: conversations,
  current: conversations[0],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_CONVOS:
      return { ...state, convos: payload };

    case GET_MY_CONVOS:
      return { ...state, convos: payload };

    case GET_MESSAGES:
      return { ...state, messages: payload };

    case SEND_MESSAGE:
      console.log(payload);
      return state;

    case GET_FAVS:
      return { ...state, convos: payload };

    case SEARCH_CONVO:
      return { ...state, convos: payload };

    case SET_CURRENT_CONV:
      return { ...state, current: payload };

    default:
      return state;
  }
}
