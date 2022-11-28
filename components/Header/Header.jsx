import React from 'react';
import style from "./Header.module.css";

function Header() {
    return(
    <div className={style.header}>
      <header>
           <h1 className={style.headline}> header must be with something! </h1>
      </header>
      </div>
    )
}

export default Header;