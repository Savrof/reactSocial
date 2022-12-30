import React from "react";
import style from "./Header.module.css";

function Header() {
    return (
        <div className={style.header}>
          <div className={style.wrapper}>
              <div className={style.logo}>
                <img src="./react-1.svg" alt="logo" width="50px" height="50px" />
                <p>reactSocial</p>
              </div>
              <div className={style.searchField}>
                search
              </div>
              <div className={style.menuPopup}> menu </div>
            </div>
        </div>
    );
}

export default Header;
