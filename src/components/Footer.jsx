import React from 'react'
import { assets } from "../assets/assets"
const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-gray-900 text-gray-400">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-6">
                <div className="md:max-w-96">
                    <img src={assets.logo} alt="logo" />
                    <p className="mt-6 text-sm">
                        QuickStay helps travelers discover and book exceptional hotels, resorts, and unique stays worldwide. Enjoy seamless booking, trusted accommodations, and unforgettable travel experiences.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">About us</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact us</a></li>
                            <li><a href="#" className="hover:text-white transition">Experience</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+994(50)595-54-23</p>
                            <p>quickstay@gmail.com</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                        QuickStay {new Date().getFullYear()} © All Right Reserved.
                    </p>
        </footer>
    )
}

export default Footer