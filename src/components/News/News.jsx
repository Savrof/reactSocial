import React from 'react';
import style from './News.module.css';

let News = (props) => {
    return(
         <>

            <div className={style.newsBlock}>
                <h1>News page</h1> 
                <h2>{props.headline}</h2>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <div>
                    <p>here i can do whatever i want&</p>
                </div>
                <p>Breaking news, word is going to hell!! peace</p>
            </div>
         </>
    )
}

export default News;