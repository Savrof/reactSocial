import React from "react";
import style from './Main.module.css';
import Profile from "./Profile/MyPosts/Profile";

function Main() {
    return (
        <div className={style.main}>
            <main>
                <img className={style.img}
                    src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
                    alt="beach"
                />
                <Profile />
            </main>
        </div>
    );
}

export default Main;
