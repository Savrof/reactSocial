import React from "react";
import Post from "./Post/Post";

let MyPosts = () => {
    return (
        <div>
            <div>Ava + deskription</div>
            <div>
                my posts
                <Post message="hi"/>
                <Post message ="fuck off" status="chill"/>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;