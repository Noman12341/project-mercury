import React from 'react'
import "./banner.css";

function Banner() {
    return (
        <div>
            <div className='banner-container' style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)", backgroundSize: "contained" }}>
                <h1 className='text-white'>Oil and Gas</h1>
            </div>
        </div>
    )
}

export default Banner;