import React from 'react';




let Inbox = (props) => {

let data = props.messagesPage;

let messagesMap = data?.map((message, key) => {
    return(
         <Inbox inbox = {message.inbox} key={key} />
    )
})


    return(
        <>
               <div className="inbox">
                     <div className="message">{props.inbox}</div>
                     {messagesMap}
                </div>
        </>
    )
}


export default Inbox;