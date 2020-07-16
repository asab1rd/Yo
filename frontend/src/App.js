import React, { useEffect } from "react";
import "./style/App.scss";
import Header from "./components/Navigation/Header";
import Conversation from "./components/Conversation";
import Conversations from "./components/Conversations";
import { resetTranslationOnResize } from "./helpers/animations";
function App() {
  //
  useEffect(() => {
    window.addEventListener("resize", resetTranslationOnResize);
  }, []);
  return (
    <div className="App">
      <Header />
      <Conversations />
      <Conversation />
    </div>
  );
}

export default App;
