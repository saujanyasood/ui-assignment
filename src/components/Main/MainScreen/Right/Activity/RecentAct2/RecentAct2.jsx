import React from 'react'
import "./RecentAct2.css"
import arrow from "./arrow.png"

export default function RecentAct2() {
    return (
        <div className="recent-act2">
            <div className="heading">
                <p>Recent Activity</p>
                <div className="dropdown">
                    <p>Show: Employee</p>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
        </div>
    )
}
