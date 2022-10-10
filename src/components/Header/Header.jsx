import { Navbar } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/header-logo.png'

function Header() {

    return (
        <Navbar
            fluid={true}
            rounded={true}
            style={{ background: 'transparent', position: 'absolute', top: '0', minWidth: '100%' }}
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
                <Navbar.Link
                    to="/"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link to="/">
                    About
                </Navbar.Link>
                <Navbar.Link to="/">
                    Services
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;