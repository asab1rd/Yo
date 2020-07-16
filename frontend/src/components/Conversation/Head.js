import React from "react";
import { ReactComponent as BackSVG } from "../../assets/back.svg";
import {
  setConvVisibility,
  setConvosVisibility,
} from "../../actions/designActions";
import { useDispatch } from "react-redux";
import { TimelineMax } from "gsap";
import { animateConversationPick } from "../../helpers/animations";
function Head({ user }) {
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
      <img className="avatar" src={user.avatar} alt={`${user.name} avatar`} />
      <h3 className="name">{user.name}</h3>
    </div>
  );
}

export default Head;
