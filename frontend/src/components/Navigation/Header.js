import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import { ReactComponent as ImportantSVG } from "../../assets/important.svg";
import { ReactComponent as FavsSVG } from "../../assets/favs.svg";
import { ReactComponent as GroupSVG } from "../../assets/group.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <LogoSVG />
      </div>
      <div className="header-buttons">
        <button className="btn">
          <FavsSVG />
        </button>
        <button className="btn active">
          <ImportantSVG />
        </button>
        <button className="btn">
          <GroupSVG />
        </button>
      </div>
    </header>
  );
}

export default Header;
