import React from 'react'
import "./Main.css"
import Intro from "./Intro/Intro"
import MainScreen from "./MainScreen/MainScreen"
import arrow from "./arrow.png"

export default function Main() {
    return (
        <div className="main">
            <p>Performance</p>
            <Intro/> 
            <div className="showButton">
                <p>Show: Employee</p>
                <img src={arrow} alt="arrow"/>
            </div>  
            <MainScreen/>     
        </div>
    )
}
