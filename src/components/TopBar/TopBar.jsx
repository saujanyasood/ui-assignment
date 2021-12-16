import React from 'react'
import "./TopBar.css"
import explore from "./explore.png"
import search from "./search.png"
import notifs from "./notifs.png"
import saujanya from "./saujanya.png"
import arrow from "./arrow.png"

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="header">
                <div className="leftNav">
                    <button className="exploreButton">
                        <div className="text">
                            <p>Explore</p>
                        </div>
                        <div className="vector">
                            <img src={explore} alt="explore"/>
                        </div>
                    </button>
                    <div className="searchBox" type="text" placeholder="Search Course">
                        <div className="vector">
                            <img src={search} alt="search"/>
                        </div>
                        <input placeholder="Search Course"/>
                    </div>
                </div>
                <div className="rightNav">
                    <div className="vector">
                        <img src={notifs} alt="notif"/>
                    </div>
                    <div className="idol">
                        <img src={saujanya} alt="idol"/>
                    </div>
                    <div className="details">
                        <div className="name">
                            <p>Saujanya Sood</p>
                            <div className="arrow">
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                        <div className="number">
                            9354123773
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
