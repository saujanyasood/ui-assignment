import React from 'react'
import "./sideBar.css"
import logo from "./logo.png"
import Element from "./SidebarElement"
import cart from "./images/cart.png"
import course from "./images/course.png"
import home from "./images/home.png"
import learningPath from "./images/learningPath.png"
import performance from "./images/performance.png"
import settings from "./images/settings.png"
import specialization from "./images/specialization.png"
import collapse from "./collapse.png"

export default function SideBar() {

    const elements = [
        {
            title: "Home",
            path: home
        },
        {
            title: "Course",
            path: course
        },
        {
            title: "Specialization",
            path: specialization
        },
        {
            title: "Learning Path",
            path: learningPath
        },
        {
            title: "Performance",
            path: performance
        },
        {
            title: "Cart",
            path: cart
        },
        {
            title: "Settings",
            path: settings
        },
    ]

    return (
        <div className="sidebar">
            <img src={logo} alt="logo"/>
            <div className="menu">
                <div className="rect"></div>
                <div className="menuFrame">
                    {elements.map((element) => {
                        return <Element title={element.title} path={element.path}/>
                    })}
                </div>
            </div>
            <div className="collapseArrow">
                <img src={collapse} alt="collapse icon"/>
            </div>
        </div>
    )
}
