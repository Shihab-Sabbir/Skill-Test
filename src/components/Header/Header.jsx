import { Navbar } from 'flowbite-react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css'
function Header() {
    const notActive = 'text-white text-center border p-2 hover:bg-slate-500 md:hover:bg-transparent md:border-0 text-lg'
    return (
        <Navbar
            fluid={true}
            rounded={true}
            style={{ background: 'transparent' }}
        >
            <Navbar.Brand>
                <Link to='/' className='flex'>
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white uppercase">
                        Skill Test
                    </span>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink className={({ isActive }) => (isActive ? ` active` : `${notActive}`)}
                    to="/"
                    end >Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? ` active` : `${notActive}`)} to="/statistics" end  >
                    Statistics
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? ` active` : `${notActive}`)} to="/blog" end>
                    Blog
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;