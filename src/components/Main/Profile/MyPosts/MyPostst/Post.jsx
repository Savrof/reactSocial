import React from 'react';

let Post = (props) => {
    return(
        <div>
            <div>{props.message} {props.status} {props.likesCount}</div>       
        </div>
    )
}
 
export default Post
 