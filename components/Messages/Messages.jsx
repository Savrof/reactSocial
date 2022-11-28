import React from "react";
import s from "./Messages.module.css";

// TODO: Сделать правильную вложенность
// TODO: how to render two components on the screne same time?

function Messages(props) {
    return (
        <div className={s.messages}>
            <div className={s.contacts}>
                <h1>Dialogs</h1>
                <div className={s.user + ' ' + s.active}>User1</div>
                <div className={s.user}>User2</div>
                <div className={s.user}>User3</div>
                <div className={s.user}>User4</div>
                <div className={s.user}>User5</div>
                <div className={s.user}>User6</div>
                <div className={s.user}>User7</div>
                <div className={s.user}>User8</div>
            </div>
            <div className={s.right}>
                <div className="inbox">
                    <div className="message">Привет</div>
                    <div className="message">Что нового!?</div>
                    <div className="message">как дела?</div>
                    <div className="message">Привет</div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
