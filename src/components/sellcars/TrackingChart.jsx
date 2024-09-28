import React, { useState } from 'react';

const data = [
  { day: 'Mon', value: 20 },
  { day: 'Tue', value: 25 },
  { day: 'Wed', value: 28 },
  { day: 'Thu', value: 50 },
  { day: 'Fri', value: 26 },
  { day: 'Sat', value: 24 },
  { day: 'Sun', value: 48 },
];

const TrackingChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className='w-full h-full'>
      <div className="bg-white dark:bg-[#242731] rounded-lg p-6">
        {/* Title */}
        <h2 className="text-[24px] text-[#242731] dark:text-white font-semibold mb-4">Tracking History</h2>

        {/* Chart */}
        <div className="relative">
          <div className="grid grid-cols-7 gap-2 h-60">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center relative"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Bar */}
                <div
                  className={`w-6 rounded-t-lg transition-all duration-300 ease-in-out cursor-pointer ${
                    hoveredBar === index
                      ? 'bg-[#FF6370] dark:bg-[#FF6370] h-full'
                      : 'bg-[#FF7E861A] dark:bg-[#FF7E860F]'
                  }`}
                  style={{ height: `${item.value * 4}px` }} // Scaling the height
                ></div>

                {/* Tooltip */}
                {hoveredBar === index && (
                  <div className="absolute -top-8 bg-gray-800 text-white text-xs font-semibold rounded-lg py-1 px-2">
                    {item.value}km/h
                  </div>
                )}

                {/* Day Label */}
                <span className="text-sm mt-2">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingChart;
