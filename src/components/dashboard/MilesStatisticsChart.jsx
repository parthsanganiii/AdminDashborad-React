import React, { useState } from "react";

const MilesStatisticsChart = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const data = [
    { time: "1 PM", value: 157 },
    { time: "2 PM", value: 120 },
    { time: "3 PM", value: 157 },
    { time: "4 PM", value: 100 },
    { time: "5 PM", value: 140 },
    { time: "6 PM", value: 90 },
    { time: "7 PM", value: 110 },
  ];
  const [activePeriod, setActivePeriod] = useState('Day'); // Toggle between Day, Week, Month

  return (

    <div className="w-full h-full mx-auto p-6 bg-white dark:bg-[#242731] rounded-xl cursor-pointer">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Miles <span className="font-normal">Statistics</span></h2>

      {/* Time Interval buttons */}
      <div className="flex space-x-4 mb-4 justify-between font-bold">
        <div>
          <button
            onClick={() => setActivePeriod('Day')}
            className={`${activePeriod === 'Day' ? 'bg-[#2884FF] text-white' : 'text-[#5F6165]'} py-1 px-3 rounded-full`}
          >
            Day
          </button>
          <button
            onClick={() => setActivePeriod('Week')}
            className={`${activePeriod === 'Week' ? 'bg-[#2884FF] text-white' : 'text-[#5F6165]'} py-1 px-3 rounded-full`}
          >
            Week
          </button>
          <button
            onClick={() => setActivePeriod('Month')}
            className={`${activePeriod === 'Month' ? 'bg-[#2884FF] text-white' : 'text-[#5F6165]'} py-1 px-3 rounded-full`}
          >
            Month
          </button>
        </div>
        <p className="text-lg font-bold text-[#5F6165]">256 Miles</p>

      </div>

      {/* Bar Chart */}
      <div className="relative flex items-end justify-between h-60">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Tooltip */}
            {hoverIndex === index && (
              <div className="mb-1 bg-black text-white text-xs px-2 py-1 rounded-md">
                {item.time} <br /> {item.value}k
              </div>
            )}
            {/* Bar */}
            <div
              className={`w-8 transition-all duration-100 ease-in-out ${hoverIndex === index
                ? "bg-[#2884FF] h-full"
                : "bg-[#F4F5F9] dark:bg-[#1F2128] h-full"
                }`}
              style={{ height: `${item.value}px` }}
            ></div>
            {/* Time Label */}
            <span className="mt-2 text-sm text-[#808191] dark:text-[#7C7C8D]">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilesStatisticsChart;
