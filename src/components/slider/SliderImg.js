import React from 'react';


function SliderImg({src}) {
    return (
        <img src={src} alt='Adamius' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    );
}

export default SliderImg;
