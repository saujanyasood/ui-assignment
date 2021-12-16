import React from 'react'
import "./Activity.css"
import RecentAct from './RecentAct/RecentAct'
import RecentAct2 from './RecentAct2/RecentAct2'

export default function Activity() {
    return (
        <div className="activity">
            <RecentAct/>
            <RecentAct2/>
        </div>
    )
}
