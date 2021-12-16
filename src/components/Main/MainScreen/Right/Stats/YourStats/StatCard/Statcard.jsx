import React from 'react'
import "./Statcard.css"

export default function Statcard(props) {
    return (
        <div className="statcard">
            <img src={props.img} alt="info"/>
            <div className="info">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}
