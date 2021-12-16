import React from 'react'
import "./Card.css"
import icon from "./icon.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={icon} alt="icon"/>
            <div className="name">
                <p className="title">{props.title}</p>
                <p className="employees">{props.employees + " Employees"}</p>
            </div>
        </div>
    )
}
