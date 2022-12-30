import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

let Dialog = (props) => {

    let path = "/dialog/" + props.id;

    let dataMap = props.dialogData;

    let dialogsMap = dataMap?.map((element, index) => {
        return (
        <Dialog name={element.name} key={index}  id={element.id} />
        )  
    }); 

    return (
        <>
            <div className={s.user}>
                <NavLink to={path}>{props.name}</NavLink> 
                {dialogsMap}
            </div>
        </>
    );
};

export default Dialog;
