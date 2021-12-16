import React from 'react'
import "./LeftDiv.css"
import Course from "./Course/Course"
import Announcement from "./Announcement/Announcement"
import Indemand from "./InDemand/Indemand"

export default function LeftDiv() {
    return (
        <div className="left">
            <Course/>
            <Announcement/>
            <Indemand/>
        </div>
    )
}
