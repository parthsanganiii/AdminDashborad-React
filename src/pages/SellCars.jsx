import React from 'react'
import Header from '../components/common/Header'
import Maincar from '../components/sellcars/maincar'
import TrackingChart from '../components/sellcars/TrackingChart'
import Offer from '../components/sellcars/Offer'


const SellCars = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <h1 className='dark:text-white text-[#242731] text-[30px] font-bold mb-6'>Sell Cars</h1>
                <div className='grid grig-cols-1 lg:grid-cols-5 gap-8 mb-8'>
                    <div className='col-span-3'>
                        <Maincar />
                    </div>
                    <div className='col-span-2'>
                        <TrackingChart />
                    </div>
                </div>
                <Offer />
            </main>
        </div>
    )
}

export default SellCars