import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartBar = ({ countryData }) => {
    
    alert(countryData.TotalConfirmed + ' - ' + countryData.TotalDeaths + ' - ' + countryData.TotalRecovered)

    const data = {
        labels: [
            'TotalDeaths',
            'TotalRecovered'
        ],
        datasets: [
            {
                data: [countryData.TotalDeaths, countryData.TotalRecovered],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ]
            }
        ]
    };

    return (
        <div>
            <h2>Covid-19 - Updates</h2>
            <Doughnut
                data={data}
                width={300}
                height={250}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default ChartBar