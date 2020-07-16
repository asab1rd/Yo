import React from "react";
import { ReactComponent as BackSVG } from "../../assets/back.svg";
import {
  setConvVisibility,
  setConvosVisibility,
} from "../../actions/designActions";
import { useDispatch } from "react-redux";
import { TimelineMax } from "gsap";
import { animateConversationPick } from "../../helpers/animations";
function Head() {
  const dispatch = useDispatch();
  const handleBack = () => {
    //SHOULD BE ONLY ON MOBILE
    animateConversationPick("back");
    dispatch(setConvVisibility(false));
    dispatch(setConvosVisibility(true));
  };
  return (
    <div className="convo-header">
      <div className="back-btn">
        {" "}
        <BackSVG onClick={handleBack} />{" "}
      </div>
      <div className="avatar">JO</div>
      <h3 className="name">JORDAN SKI CHIC</h3>
    </div>
  );
}

export default Head;
