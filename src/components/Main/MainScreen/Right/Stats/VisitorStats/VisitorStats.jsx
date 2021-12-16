import React from 'react'
import "./VisitorStats.css"
import Tabcard from "./Tabcard/Tabcard"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function VisitorStats() {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          
        },
      };
      
      const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Viewed',
            data: [84, 84, 84, 84, 84, 84, 84],
            backgroundColor: '#4318FF',
            barThickness: 20,
            borderRadius: 10
          },
          {
            label: 'Purchased',
            data: [20, 40, 34, 22, 40, 50, 50],
            backgroundColor: '#69D2FF',
            barThickness: 20,
            borderRadius: 50
          }, 
        ],
      };
    return (
        <div className="visitor-stats">
            <div className="heading">
                <p>Visitors</p>
                <div className="subheading">
                  <p>254,845</p>
                  <div className="tabs">
                    <p>Most visited</p>
                    <Tabcard/>
                    <Tabcard/>
                    <Tabcard/>
                  </div>
                </div>
            </div>
            
            <div className="barChartContainer">
                <Bar options={options} data={data} height={160} width={709}/>
            </div>
        </div>
    )
}
