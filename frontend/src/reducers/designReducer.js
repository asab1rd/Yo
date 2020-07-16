import { CONV_VISIBILITY, CONVOS_VISIBILITY } from "../actions/actionTypes";

export default function (
  state = { convoVisibility: false, convosVisibility: true },
  { type, payload },
) {
  switch (type) {
    case CONV_VISIBILITY:
      return { ...state, convoVisibility: payload };
    case CONVOS_VISIBILITY:
      return { ...state, convosVisibility: payload };
    default:
      return state;
  }
}
