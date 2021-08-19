import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" activeClassName="border-b-2 border-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" activeClassName="border-b-2 border-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" activeClassName="border-b-2 border-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">News</NavLink>
                    </li>
                  
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}