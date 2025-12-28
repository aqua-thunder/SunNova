import { useState } from 'react'
import React from 'react'
import './Navbar.css'
import { useAuth } from '../store/auth'
import { NavLink } from 'react-router-dom'

import Hamburger from './Hamburger'

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const {user} = useAuth();
    const [hamburger, setHamburger] = useState()
    const hamburgerOn = () => {

        const element = document.getElementById('hamburger')
        if (element) {
            element.style.width = "60vw"
            element.style.minHeight = "100%"
            element.style.transition = "0.3s"
            element.style.top = "0px"
        }
        <Hamburger hamburger={hamburger} />
    }
    return (
        <div className='sticky top-0 bg-white z-10' id='navbar'>
                <Hamburger />
            <div id='navbar' className='flex justify-between items-center p-4'>
                <img src="../../../img/hamburger_menu.svg" onClick={hamburgerOn} className='w-[7vw] pl-2 pr-14 hidden hamburger' alt="hamburger" />
                <span className='font-bold text-2xl text-green-600'>SunNova</span>
                <ul className='flex items-center gap-5 ' id='display_none'>
                    <NavLink to="/" className='cursor-pointer hover:font-bold'>Home</NavLink>
                    <li className='cursor-pointer hover:font-bold'>Energy</li>
                    <NavLink to={'/service'} className='cursor-pointer hover:font-bold'>Service</NavLink>
                    <li className='cursor-pointer hover:font-bold'>Our Focuse</li>
                    <li className='cursor-pointer hover:font-bold'>Industries</li>

                    {
                        isLoggedIn ?
                            (<div className='flex items-center gap-3'>
                                <NavLink to="/logout" className='cursor-pointer hover:font-bold'>Logout</NavLink>
                                <div className='font-bold'>{user.username}</div>

                            </div>)
                            :
                            (
                                <div className='space-x-3'>
                                    <NavLink to="/login" className='cursor-pointer hover:font-bold'>Login</NavLink>
                                    <NavLink to="/signup" className='cursor-pointer hover:font-bold'>Signin</NavLink>
                                </div>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default Navbar
