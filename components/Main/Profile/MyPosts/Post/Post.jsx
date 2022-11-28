import React from 'react';

let Post = (p) => {
    return(
        <div>
            <div>{p.message}: {p.status}</div>       
        </div>
    )
}
 
export default Post
 