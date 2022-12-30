import React from "react";
import style from "./Main.module.css";
import Profile from "./Profile/MyPosts/Profile";

function Main(props) {

    return (
        <div className={style.main}>
            <main>
                <div className="backgroundImg">
                    <img
                        className={style.img}
                        src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
                        alt="beach"
                    />
                    <Profile postData={props.postData} />
                </div>
            </main>
        </div>
    );
}

export default Main;
