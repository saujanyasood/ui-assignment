import React from 'react'
import headerimg from "../headerimg.png"
import arrow from "../arrow.png"
import "./Intro.css"

export default function Intro() {
    return (
        <div className="intro">
            <div className="header">
                    <div className="rect">
                        <div className="greeting">
                            <p className="hello">Hello Jane!</p>
                            <p className="greeting2">It's good to see you again</p>
                        </div>
                        
                    </div>
                    <img src={headerimg} alt="header"/>
                    
                </div>
                <div className="download">
                    <div className="textframe">
                        <p>Download Report</p>
                        <div className="lastweek">
                            <p>Last week</p>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>  
        </div>
    )
}
