import React from 'react'
import "./ChartInfo.css"

export default function ChartInfo(props) {
    return (
        <div className="info">
            <img src={props.img} alt="info"/>
            <p>{props.title}</p>
        </div>
    )
}
