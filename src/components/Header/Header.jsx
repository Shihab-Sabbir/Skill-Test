import { Navbar } from 'flowbite-react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/header-logo.png'
function Header() {

    return (
        <Navbar
            fluid={true}
            rounded={true}
            style={{ background: 'transparent' }}
        >
            <Navbar.Brand>
                <Link to='/'>
                    <img
                        src={logo}
                        className="mr-3 h-10 w-10 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white uppercase">
                        Skill Test
                    </span>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink
                    to="/"
                    className='text-white'
                >
                    Home
                </NavLink>
                <NavLink to="/statistics" className='text-white'>
                    Statistics
                </NavLink>
                <NavLink to="/blog" className='text-white'>
                    Blog
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;