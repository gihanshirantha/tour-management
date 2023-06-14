import React from 'react';
import './service-card.css';

const ServuceCard=({item})=> {

    const{imgUrl,title,desc}= item

  return (
    <div className="servise_item">
        <div className="service_img">
            <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
    )
}

export default ServuceCard 