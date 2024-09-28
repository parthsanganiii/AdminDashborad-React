import React, { useState } from 'react'
import Header from '../components/common/Header'
import MilesStatisticsChart from '../components/dashboard/MilesStatisticsChart'
import Detail from '../components/dashboard/Detail'
import CarStatisticsChart from '../components/dashboard/CarStatisticsChart'
import CarList from '../components/dashboard/CarList'

const Dashboard = () => {
    const [togglevalue, setTogglevalue] = useState(false)
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header setTogglevalue={setTogglevalue} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <Detail togglevalue={togglevalue} />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-5'>
                    <MilesStatisticsChart />
                    <CarStatisticsChart />
                </div>
                <CarList />
            </main>
        </div>
    )
}

export default Dashboard