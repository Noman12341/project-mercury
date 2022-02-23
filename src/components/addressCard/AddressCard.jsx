import React from 'react';
import "./address-card.css";

function AddressCard({ title, address, phoneNo }) {
    return (
        <div id="address-card" className='text-center'>
            <strong className='text-white'>{title}</strong>
            <p className='text-white'>{address}</p>
            <p className='text-white'>{phoneNo}</p>
        </div>
    )
}

export default AddressCard;