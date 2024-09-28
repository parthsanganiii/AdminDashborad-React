import React from 'react'
import Header from '../components/common/Header'
import Car_detail from '../components/booking/car_detail'


const Booking = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <h1 className='dark:text-white text-[#242731] text-[30px] font-bold mb-6'>Booking</h1>
                <div>
                    <Car_detail />
                </div>
            </main>
        </div>
    )
}

export default Booking