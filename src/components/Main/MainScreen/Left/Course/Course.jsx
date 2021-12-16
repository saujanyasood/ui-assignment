import React from 'react'
import "./Course.css"
import ChartInfo from "./ChartInfo/ChartInfo"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2"
import green from "./green.png"
import yellow from "./yellow.png"
import red from "./red.png"


ChartJS.register(ArcElement, Tooltip, Legend);


export default function Course() {

    const data = {
        labels: [],
        datasets: [
          {
            data: [36, 36, 18],
            backgroundColor: [
              '#FFAA30',
              '#A0E6CB',
              '#FC8284'
            ],
          },
        ],
      };
        
    return (
        <div className="course">
            <div className="heading">
                <p className="title">Course</p>
                <p className="desc">Total course assigned</p>
            </div>
            <div className="chartContainer">
                <div className="piechart">
                    <Doughnut className="doughnut" data={data} />
                </div>
                <div className="chartInfo">
                  <ChartInfo title="Course Completed" img={green}/>
                  <ChartInfo title="Ongoing Course" img={yellow}/>
                  <ChartInfo title="Not started" img={red}/>
                </div>
            </div>
        </div>
    )
}
