import React from 'react'

const Offer = () => {
    return (
        <div>
            <div className='flex justify-between mb-8'>
                <h1 className='text-[30px] font-bold text-[#242731] dark:text-white '>Offers</h1>
                <div className='flex gap-5'>
                    <div className='bg-white dark:bg-[#242731] text-[#A162F7] dark:text-[#E0E4E7] font-medium rounded-full flex justify-center items-center py-2 px-6 gap-6'>
                        <p>New</p>
                        <img src='images/downward.svg' className='w-[30px]' />
                    </div>
                    <div className='bg-white dark:bg-[#242731] text-[#A162F7] dark:text-[#E0E4E7] font-medium rounded-full flex justify-center items-center py-2 px-6 gap-6'>
                        <p>Toyota</p>
                        <img src='images/downward.svg' className='w-[30px]' />
                    </div>
                    <div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Offer