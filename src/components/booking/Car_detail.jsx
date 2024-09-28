import React from 'react'

const data = [
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-1.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-4.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
  { title: "Porshe 718 Cayman S", type: "Coupe", img: "images/booking-3.svg", user: "4", gair: "Manual", rent: "$400/d" },
]

const Car_detail = () => {
  return (
    <div>
      <div className='flex justify-between mb-8'>
        <div className='flex gap-5'>
          <div className='bg-white dark:bg-[#242731] text-[#5F6165] dark:text-[#E0E4E7] font-medium rounded-full flex justify-center items-center py-2 px-6 gap-6'>
              <p>New</p>
              <img src='images/downward.svg' className='w-[30px]'/>
          </div>
          <div className='bg-white dark:bg-[#242731] text-[#5F6165] dark:text-[#E0E4E7] font-medium rounded-full flex justify-center items-center py-2 px-6 gap-6'>
              <p>Toyota</p>
              <img src='images/downward.svg' className='w-[30px]'/>
          </div>
          <div>

          </div>
        </div>
        <div className='flex gap-5'>
          <img src='images/dashboard-icon.svg' className='bg-white dark:bg-[#2B2E38] shadow-md p-3.5 rounded-full cursor-pointer'/>
          <img src='images/filter.svg' className='cursor-pointer'/>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map((item) => (
          <div className='bg-white dark:bg-[#242731] rounded-xl p-6 flex flex-col gap-'>
            <div className='flex justify-between items-center '>
              <h1 className='text-[18px] font-bold text-[#242731] dark:text-white '>{item.title}</h1>
              <img src='images/like.svg' className='cursor-pointer'/>
            </div>
            <p className='text-[16px] text-[#72767C]'>{item.type}</p>
            <img src={item.img} className='py-5' />
            <div className='flex justify-between'>
              <div className='flex gap-4 items-center justify-center'>
                <img src='images/user.svg' />
                <p className='text-[#72767C] dark:text-[#E0E4E7]'>{item.user}</p>
                <img src='images/b-arrow.svg' />
                <p className='text-[#72767C] dark:text-[#E0E4E7]'>{item.gair}</p>
              </div>
              <h4 className='text-[#72767C] dark:text-[#E0E4E7]'>{item.rent}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Car_detail