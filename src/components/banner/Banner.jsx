import React from 'react'
import "./banner.css";

function Banner({ title, url }) {
    return (
        <div>
            <div className='banner-container pl-5' style={{ backgroundImage: `url(${url})`, backgroundSize: "contained" }}>
                <h1 className='text-white'>{title}</h1>
            </div>
        </div>
    )
}

export default Banner;