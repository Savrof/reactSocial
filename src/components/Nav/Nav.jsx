import React from "react";
import style from './Nav.module.css';
import {NavLink} from  'react-router-dom';

    // TODO: Сделать ссылки отличаюшиеся после посещения. 

let Nav = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
        }
    }

    return (
        <nav className={style.nav}>
            <ul className={style.link}>
                <NavLink style={navLinkStyles} to="/main"><li>Main</li></NavLink>
                <NavLink style={navLinkStyles} to="messages"><li>Messages</li></NavLink>
                <NavLink style={navLinkStyles} to="/news"><li>News</li></NavLink>
                <NavLink style={navLinkStyles} to="/music"><li>Music</li></NavLink>
                <NavLink style={navLinkStyles} to="/settings"><li>Settings</li></NavLink>
            </ul>
        </nav>
    );
};
    

export default Nav;
