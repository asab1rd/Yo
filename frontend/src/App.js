import React, { useEffect, useState } from "react";
import "./style/App.scss";
import Header from "./components/Navigation/Header";
import Conversation from "./components/Conversation";
import Conversations from "./components/Conversations";
import { resetTranslationOnResize, logoAnimation } from "./helpers/animations";
import { ReactComponent as LogoSVG } from "./assets/logo.svg";
import { TimelineMax } from "gsap/gsap-core";
function App() {
  const [appReady, setappReady] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resetTranslationOnResize);
    logoAnimation(setappReady);
  }, []);
  return (
    <div className="App">
      <div className="experience">
        <div className="logo">
          <LogoSVG />
          {/* <h1 className="accroche">THE BEST MESSENGER APP</h1> */}
        </div>
      </div>

      {appReady && (
        <>
          <Header />
          <Conversations />
          <Conversation />
        </>
      )}
    </div>
  );
}

export default App;
