import { TimelineMax } from "gsap";

/**
 * Animation of the conversation / conversations sections after a click on the picker or the back button
 * ONLY ON MOBILE BECAUSE OF THE SPLIT VIEW
 * @param {String} from to know if we are animating after a picker or back arrow button
 */
export const animateConversationPick = (from) => {
  //ONLY IF WE ARE ON MOBILE
  const { innerWidth: width } = window;
  if (width > 470) {
    return;
  }
  if (from === "back") {
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
    tl.to(".conversations", { x: "0" }).to(".conversation", { x: "100%" }, 0);
  } else {
    const tl = new TimelineMax({
      onStart: () => {
        document.getElementById("conversation").classList.remove("not-my-turn");
      },
      onComplete: () => {
        document
          .getElementById("conversations-picker")
          .classList.add("not-my-turn");
      },
    });
    tl.to(".conversations", { x: "-100%" }).to(".conversation", { x: "0" }, 0);
  }
};

export const resetTranslationOnResize = () => {
  const { innerWidth: width } = window;
  //ONLY IF IT'S DESKTOP
  if (width < 470) {
    return;
  }
  document.getElementById("conversations-picker").style.transform = "initial";
  document.getElementById("conversation").style.transform = "initial";
};

export const logoAnimation = (setappReady) => {
  //For responsiveness
  const { innerWidth: width } = window;
  let from = "-1000vw";

  //App Ready
  const tl = new TimelineMax({
    onComplete: () => {
      setappReady(true);
    },
  });
  const logo = ".stroke";
  tl.set(logo, { visibility: "visible" });
  tl.from(logo, {
    opacity: 1,
    duration: 3,
    x: from,
    rotation: 360,
  }).to(".experience", { duration: 2, opacity: 0 });
};
