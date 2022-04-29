import React from 'react';
import './Service.scss'

function Service({src, header, active, onChange}) {
    return (
        <div className={active ? 'service active-service' : 'service'} onClick={onChange}>
            <img src={src} alt='Adamius LLC'/>
            <p>{header}</p>
        </div>
    );
}

export default Service;
