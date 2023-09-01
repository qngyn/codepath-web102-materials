import React from "react";
import './Card.css'
const Card = (props) => {
    const { title, location, imgSrc, menu } = props
    return (
        <div className="card">
            <img src={imgSrc} className="card-img"/>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h4 className="card-location">{location}</h4>
                <button className="card-btn"><a href = {menu ?? ""}> View Menu</a></button>
            </div>
        </div>
    )
}

export default Card