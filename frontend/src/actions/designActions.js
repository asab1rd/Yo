import { CONV_VISIBILITY, CONVOS_VISIBILITY } from "./actionTypes";
export function setConvVisibility(state) {
  return {
    type: CONV_VISIBILITY,
    payload: state,
  };
}

export function setConvosVisibility(state) {
  return {
    type: CONVOS_VISIBILITY,
    payload: state,
  };
}
