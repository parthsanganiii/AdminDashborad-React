import React, { useEffect } from 'react'
import { Search } from "lucide-react";
import ToggleSwitch from './ToggleSwitch';
import { useState } from "react";
import Darkmode from './Darkmode';



const Header = ({ setTogglevalue }) => {

    // const [notifications, setNotifications] = useState({
    //     push: false,
    // });

    // const [darkMode, setDarkMode] = useState(() => {
    //     const savedTheme = localStorage.getItem('darkMode');
    //     return savedTheme === 'true';
    // });

    // const toggleTheme = () => {
    //     setDarkMode(prevMode => {
    //         const newMode = !prevMode;
    //         localStorage.setItem('darkMode', newMode);
    //         document.documentElement.classList.toggle('dark', newMode);
    //         return newMode;
    //     });
    // };

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [darkMode]);

    return (
        <header className='dark:bg-[#242731] backdrop-blur-md shadow-lg border-b dark:border-[#242731] bg-white border-white'>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center mb-'>
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='Search products...'
                            className='dark:bg-[#1F2128] bg-[#F5F4F6] text-[#7C7C8D] placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#373737]'
                        />
                        <Search className='absolute left-3 top-2.5 text-[#7C7C8D]' size={18} />
                    </div>
                    <div className='flex items-center gap-5'>
                        {/* <ToggleSwitch isOn={darkMode} onToggle={toggleTheme} /> */}
                        <Darkmode setTogglevalue={setTogglevalue} />
                        <img src='images/notification.svg' />
                        <img src='images/header-img.png' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header