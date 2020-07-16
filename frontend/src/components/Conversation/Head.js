import React from "react";
import { ReactComponent as BackSVG } from "../../assets/back.svg";
import {
  setConvVisibility,
  setConvosVisibility,
} from "../../actions/designActions";
import { useDispatch } from "react-redux";
import { TimelineMax } from "gsap";

function Head() {
  const dispatch = useDispatch();
  const handleBack = () => {
    //SHOULD BE ONLY ON MOBILE
    const tl = new TimelineMax({
      onStart: () => {
        document
          .getElementById("conversations-picker")
          .classList.remove("not-my-turn");
      },
      onComplete: () => {
        document.getElementById("conversation").classList.add("not-my-turn");
      },
    });
    tl.to(".conversations", { x: "0", opacity: 1 }).to(
      ".conversation",
      { x: "100%", opacity: 0 },
      0,
    );
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
