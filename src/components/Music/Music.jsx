import React from 'react';

let Music = (props) => {
    return(
        <>
            <ul>
            <h1>my favorite music</h1>
                <li>Radiohead</li>
                <li>Others</li>
                <li>{props.yourMusic}</li>
            </ul>
        </>
    )

}

export default Music;