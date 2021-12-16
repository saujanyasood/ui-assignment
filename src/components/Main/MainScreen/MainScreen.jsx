import React from 'react'
import "./MainScreen.css"
import LeftDiv from "./Left/LeftDiv"
import RightDiv from "./Right/RightDiv"

export default function MainScreen() {
    return (
        <div className="main-screen">
            <LeftDiv/>
            <RightDiv/>
        </div>
    )
}
