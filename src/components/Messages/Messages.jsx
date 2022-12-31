import React from "react";
import Dialog from "./Dialog/Dialog";
import Inbox from "./Inbox/Inbox";
import s from "./Messages.module.css";




function Messages(props) {

console.log('mess', props.messagesPage[0].dialogData)
    return (

        <div className={s.messages}>
            <div className={s.contacts}>
                <h1>Dialogs</h1>
                <Dialog messagesPage={props.messagesPage[0].dialogData} />
                


            </div>

            <div className={s.right}>
               <Inbox messagesPage={props.messagesPage[0].inboxData} />
            </div>
        </div>
    );
}

export default Messages;
