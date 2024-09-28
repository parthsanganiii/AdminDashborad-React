import { BarChart2, DollarSign, icons, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { audio } from "framer-motion/client";
import autoprefixer from "autoprefixer";
import Header from "./Header";

const SIDEBAR_ITEMS = [
    {
        name: "Dashboard",
        icon: "images/dashboard-icon.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/",
    },
    {
        name: "Assets",
        icon: "images/assest.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/assets"
    },
    {
        name: "Booking",
        icon: "images/booking.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/booking"
    },
    {
        name: "Sell Cars",
        icon: "images/sell-cars.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/sell-cars"
    },
    {
        name: "Buy Cars",
        icon: "images/buy-car.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/but-car"
    },
    {
        name: "Services",
        icon: "images/services.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/services"
    },
    {
        name: "Calender",
        icon: "images/calender.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/calender"
    },
    {
        name: "Messages",
        icon: "images/messages.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/messages"
    },
    {
        name: "Settings",
        icon: "images/settings.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/messages"

    },
    {
        name: "Log out",
        icon: "images/logout.svg",
        icon_h: "images/assest.svg",
        color: "#808191",
        href: "/messages"
    },
]

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 
                ${isSidebarOpen ? "w-64" : "w-20"}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className='h-full dark:bg-[#242731] backdrop-blur-md p-4 flex flex-col border-r dark:border-[#242731] border-white bg-white'>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='flex items-center p-2 text-sm font-medium rounded-lg transition-colors mb-2'
                >
                    <Logo size={24} />
                    <AnimatePresence>
                        {isSidebarOpen && (
                            <motion.span
                                className="ml-4 whitespace-nowrap"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.2, delay: 0.3 }}
                            >
                                <img src="images/motiv.svg" className={``}/>
                                {/* <img src="images/w_motiv.svg" className={``}/> */}
                            </motion.span>
                        )}

                    </AnimatePresence>
                </motion.div>
                        <div className="hidden">
                            <Header />
                        </div>
                <nav className="mt-8 flex-grow">
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                className={`flex items-center p-3 text-sm font-medium rounded-lg dark:hover:bg-[#292E3D] hover:bg-[#F3F5F8] hover:text-[#5F6165] dark:hover:text-[#FFFFFF] transition-colors mb-2 ${item.name == "Settings" ? "absolute bottom-10 w-[87%]" : ""} ${item.name == "Log out" ? "absolute bottom-0 w-[87%]" : ""}`}
                            >
                                <img src={item.icon} className=""/>
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}

                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>

        </motion.div>
    )
}

export default Sidebar