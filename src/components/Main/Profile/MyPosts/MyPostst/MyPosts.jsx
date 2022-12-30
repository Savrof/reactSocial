import React from "react";
import Post from "./Post";

let MyPosts = (props) => {

let data = props.postData;

let postMap = data.map((element, index) => {
    return( 
        <Post message={element.message} key={index} likesCount={element.likesCount} status={element.status} />
    )
})

    return (
        <div> 
            <div>
                my posts:

                {postMap}
              
            </div>
        </div>
    );
};

export default MyPosts;