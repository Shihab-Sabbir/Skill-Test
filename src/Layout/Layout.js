import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from '../components/Header/Header'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;