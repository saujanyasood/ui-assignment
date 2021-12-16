import React from 'react'
import "./YourStats.css"
import button from "./graphbutton.png"
import downarrow from "./downarrow.png"
import Statcard from './StatCard/Statcard'
import tile1 from "./StatCard/tile1.png"
import tile2 from "./StatCard/tile2.png"
import tile3 from "./StatCard/tile3.png"
import tile4 from "./StatCard/tile4.png"
import tile5 from "./StatCard/tile5.png"
import tile6 from "./StatCard/tile6.png"

export default function YourStats() {
    return (
        <div className="your-stats">
            <div className="heading">
                <div className="upperdiv">
                    <p>Your statistics</p>
                    <div className="graphInfo">
                        <p>Graph</p>
                        <img src={button} alt="graphbutton"/>
                    </div>
                </div>
                <div className="lowerdiv">
                    <p>Overview</p>
                    <div className="dropdown">
                        <p>Show: Monthly</p>
                        <img src={downarrow} alt="downarrow"/>
                    </div>
                </div>
                
            </div>
            <div className="statDiv">
                <Statcard img={tile1} title="279" desc="Active user"/>
                <Statcard img={tile2} title="26%" desc="Attendance"/>
                <Statcard img={tile3} title="279" desc="Average quiz score"/>
                <Statcard img={tile4} title="279" desc="Total enrolled"/>
                <Statcard img={tile5} title="279" desc="Total questions resolved"/>
                <Statcard img={tile6} title="279" desc="Total hours spent"/>
            </div>
        </div>
    )
}
