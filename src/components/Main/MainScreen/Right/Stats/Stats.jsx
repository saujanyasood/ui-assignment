import React from 'react'
import "./Stats.css"
import VisitorStats from './VisitorStats/VisitorStats'
import YourStats from './YourStats/YourStats'

export default function Stats() {
    return (
        <div className="stats">
            <YourStats/>
            <VisitorStats/>
        </div>
    )
}
