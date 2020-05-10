import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartBar = ({
    totalConfirmed,
    totalDeaths,
    totalRecovered }) => {
    const data = {
        labels: [
            'Confirmed',
            'Deaths',
            'Recovered'
        ],
        datasets: [
            {
                data: [totalConfirmed, totalDeaths, totalRecovered],
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