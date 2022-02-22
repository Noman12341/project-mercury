import React from 'react';

import "./specialityCard.css";

function SpecialityCard({ imgUrl, title, decription }) {
    return (
        <div id="speciality-card" className="text-center">
            <div>
                <img src={imgUrl} height={"100"} alt="specialit-image" />
            </div>
            <h2>{title}</h2>
            <p>{decription}</p>
        </div>
    )
}

export default SpecialityCard