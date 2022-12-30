import React from 'react';
import MyPosts from './MyPostst/MyPosts';
import s from './Profile.module.css';



let Profile = (props) => {

    return( 
        <div className={s.main}>
            <div>Ava + deskription</div>
            <MyPosts postData={props.postData} />
        </div>
    )
}

export default Profile