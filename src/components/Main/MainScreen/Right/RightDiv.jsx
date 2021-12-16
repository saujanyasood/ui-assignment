import React from 'react'
import Stats from "./Stats/Stats"
import "./RightDiv.css"
import Activity from './Activity/Activity'

export default function RightDiv() {
    return (
        <div className="right">
            <Stats/>
            <Activity/>
        </div>
    )
}
