import React from "react";
import Dialog from "./Dialog/Dialog";
import Inbox from "./Inbox/Inbox";
import s from "./Messages.module.css";




function Messages(props) {

    return (

        <div className={s.messages}>
            <div className={s.contacts}>
                <h1>Dialogs</h1>
                <Dialog dialogData={props.dialogData} />
                


            </div>

            <div className={s.right}>
               <Inbox inboxData={props.inboxData} />
            </div>
        </div>
    );
}

export default Messages;
