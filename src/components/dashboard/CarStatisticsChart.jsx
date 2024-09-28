import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    const data = {
        labels: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
        datasets: [
            {
                label: 'Car Statistics',
                data: [30, 50, 60, 85, 70, 65, 60, 70],
                borderColor: '#FF7849',
                fill: true,
                backgroundColor: 'rgba(255, 120, 73, 0.1)', // Add shadow under the line
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hides the legend for cleaner look
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false, // Hide Y-axis labels to match the design
                },
            },
        },
    };
    const [activePeriod, setActivePeriod] = useState('Day'); // Toggle between Day, Week, Month

    return (
        <div className="w-full h-full mx-auto p-6 bg-white dark:bg-[#242731] rounded-xl cursor-pointer">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Car  <span className="font-normal">Statistics</span></h2>

            <div className='flex justify-between items-center'>
                <p className="text-gray-400 mb-4">20 February 2022</p>

                <div className='bg-[#F5F4F6] dark:bg-[#2B2E38] font-bold rounded-full'>
                    <button
                        onClick={() => setActivePeriod('Day')}
                        className={`${activePeriod === 'Day' ? 'bg-[#FF764C] text-white' : 'text-[#5F6165] dark:text-[#7C7C8D]'} py-1 px-3 rounded-full`}
                    >
                        Day
                    </button>
                    <button
                        onClick={() => setActivePeriod('Week')}
                        className={`${activePeriod === 'Week' ? 'bg-[#FF764C] text-white' : 'text-[#5F6165] dark:text-[#7C7C8D]'} py-1 px-3 rounded-full`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => setActivePeriod('Month')}
                        className={`${activePeriod === 'Month' ? 'bg-[#FF764C] text-white' : 'text-[#5F6165] dark:text-[#7C7C8D]'} py-1 px-3 rounded-full`}
                    >
                        Month
                    </button>
                </div>
            </div>

            {/* Line Chart */}
            <div className="h-64">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
