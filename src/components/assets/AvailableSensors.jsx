import React, { useState } from 'react';
import { FiTrendingUp } from 'react-icons/fi';

const sensors = [
  { name: 'Asset – Fuel Consumed', unit: '(10)', selected: true },
  { name: 'Asset – Odometer', unit: '(km)', selected: false },
  { name: 'Asset – Runtime', unit: '(km)', selected: false },
  { name: 'Asset – Speed', unit: '(hr)', selected: false },
  { name: 'Engine Temperature', unit: '(deg C)', selected: false },
];

const AvailableSensors = () => {
  const [activeSensor, setActiveSensor] = useState('Asset – Fuel Consumed');

  return (
    <div className="bg-white dark:bg-[#242731] p-6 rounded-xl ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-black dark:text-white font-bold">Available Sensors</h2>
        <button className="text-[#72767C] dark:text-[#808191] font-medium">Assets</button>
      </div>

      <ul className="space-y-4">
        {sensors.map((sensor) => (
          <li
            key={sensor.name}
            className={`flex justify-between items-center p-2 rounded-md cursor-pointer 
              ${activeSensor === sensor.name ? '' : 'bg-transparent'}`}
            onClick={() => setActiveSensor(sensor.name)}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={activeSensor === sensor.name}
                readOnly
                className={`mr-3 rounded ${
                  activeSensor === sensor.name
                    ? 'bg-[#FF6370] border-[#FF6370]'
                    : 'bg-transparent border-[#808191]'
                }`}
              />
              <span
                className={`text-lg font-medium ${
                  activeSensor === sensor.name
                    ? 'text-[#FF6370]'
                    : 'text-[#808191]'
                }`}
              >
                {sensor.name} <span className="text-[#808191]">{sensor.unit}</span>
              </span>
            </div>
            <FiTrendingUp
              className={`w-6 h-6 ${
                activeSensor === sensor.name ? 'text-[#FF6370]' : 'text-[#808191]'
              }`}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button className="w-auto py-2 px-4 font-medium rounded-xl bg-[#FF6370] text-white text-center">
          See All
        </button>
      </div>
    </div>
  );
};

export default AvailableSensors;
