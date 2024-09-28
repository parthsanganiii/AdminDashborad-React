import React from 'react'
import Header from '../components/common/Header'
import Car_detail from '../components/assets/car_detail'
import ActivityChart from '../components/assets/ActivityChart'
import Noties from '../components/assets/Noties'
import AvailableSensors from '../components/assets/AvailableSensors'
import Reminder from '../components/assets/Reminder.jsx'


const Assets = () => {
  
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <h1 className='dark:text-white text-[#242731] text-[30px] font-bold mb-6'>Assets</h1>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-8 mx-auto'>
          <div className='col-span-2 w-full'>
          <Car_detail />
          </div>
          <div className='col-span-4'>
            <ActivityChart />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
              <Noties />
              <AvailableSensors />
            </div>
            <Reminder />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Assets