import React from 'react'
import { NavLink } from 'react-router-dom'
const Hamburger = (props) => {
    if (props.element) {
        const element = document.getElementById('hamburger')
        element.style.width = props.width
        element.style.minHeight = props.minHeight;
        element.style.transition = props.transition;
        element.style.top = props.top;
    }
    const FilterClose = () => {
        const element = document.getElementById('hamburger')
        if (element) {
            element.style.width = "0vw"
            element.style.minHeight = "0vh"
            element.style.transition = "0.3s"
        }
    }
    return (
        <div>
            <div className='w-0 h-0 left-0 overflow-x-hidden fixed bg-white z-20' id='hamburger'>
                <div className='p-5' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-center text-[21px]'>Account</h1>
                        <img onClick={FilterClose} className='bg-gray-900 rounded-full invert w-5 cursor-pointer' src="../../../img/cross.svg" alt="" />
                    </div>
                    <ul className='  border border-gray-200 rounded-lg space-y-10 mt-5 py-7 pl-7 text-sm font-semibold '>
                        <li className='cursor-pointer'><NavLink to="/">Home</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="">Energy</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/service">Service</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="">Our Focus</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="">Industries</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/login">Login</NavLink></li>

                    </ul>
                </div>
            </div>
            </div>
    )
}

export default Hamburger
