import React from 'react'
import "./Indemand.css"
import Card from "./Card/Card"

export default function Indemand() {
    return (
        <div className="indemand">
            <p>Course in demand</p>
            <Card title="Introduction to Hadoop" employees="28"/>
            <Card title="Getting started with Hadoop" employees="28"/>
            <Card title="Introduction to Hadoop" employees="28"/>
            <Card title="Introduction to Hadoop" employees="28"/>
            <Card title="Introduction to Hadoop" employees="28"/>
        </div>
    )
}
