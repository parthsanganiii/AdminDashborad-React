import React from 'react'
import { motion } from 'framer-motion';

const data = [
  { id: 1, title: "Urgent Safety Recall", fdate: "06/04/2022", ldate: "08/04/2022", notify: "David Demo", status: "Completed" },
  { id: 2, title: "Urgent Safety Recall", fdate: "06/04/2022", ldate: "08/04/2022", notify: "David Demo", status: "Completed" }
]

const Reminder = () => {
  return (
    <div className='bg-white dark:bg-[#242731] rounded-xl p-6 mt-8'>
      <div className='flex justify-between items-center mb-3'>
        <h1 className='text-[18px] font-bold text-[#000000] dark:text-white'>Reminder</h1>
        <button className='bg-[#A162F7] text-white rounded-xl px-4 py-2'>
          + Add New
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left font-medium text-[#72767C] dark:text-[#7C7C8D] uppercase tracking-wider'>
                Description
              </th>
              <th className='px-6 py-3 text-left font-medium text-[#72767C] dark:text-[#7C7C8D] uppercase tracking-wider'>
                Due
              </th>
              <th className='px-6 py-3 text-left font-medium text-[#72767C] dark:text-[#7C7C8D] uppercase tracking-wider'>
                Overdue
              </th>
              <th className='px-6 py-3 text-left font-medium text-[#72767C] dark:text-[#7C7C8D] uppercase tracking-wider'>
                Notify
              </th>
              <th className='px-6 py-3 text-left font-medium text-[#72767C] dark:text-[#7C7C8D] uppercase tracking-wider'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700'>
            {data.map((items) => (
              <motion.tr
                key={items.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4 whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7] flex gap-2 items-center'>

                  {items.title}
                </td>

                <td className='px-6 py-4 whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>
                  {items.fdate}
                </td>

                <td className='px-6 py-4 whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>
                  ${items.ldate}
                </td>
                <td className='px-6 py-4 whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>{items.notify}</td>
                <td className='px-6 py-4 whitespace-nowrap font-semibold text-[#242731] dark:text-[#E0E4E7]'>{items.status}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Reminder