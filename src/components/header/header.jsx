import React from "react";
import { Link } from "react-router-dom";
import * as S from "./header.module.css";

const Header = () => {
  return (
    <div className={S.container}>
      <div className={S.title}>
        <h1>
          App <span className={S.span}>MemoryCard</span>
        </h1>
      </div>
      <div className={S.list}>
        <ul>
          <li><Link id={S.link} to="/">Reminder</Link></li>
          <li><Link id={S.link} to="/notes">Notes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
