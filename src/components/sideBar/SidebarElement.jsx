import React from 'react'
import "./SidebarElement.css"

export default function SidebarElement(props) {
    return (
        <div className="element">
            <div className="icon">
                <div className="vector"></div>    
                <img src={props.path} alt="alt"/>
            </div>
            <p>{props.title}</p>
        </div>
    )
}
