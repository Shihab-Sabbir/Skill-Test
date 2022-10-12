import React, { createContext } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from '../components/Header/Header'

export const UserContext = createContext([]);

function Layout() {
    const data = useLoaderData();
    return (
        <UserContext.Provider value={data}>
            <Header />
            <Outlet />
        </UserContext.Provider>
    )
}

export default Layout;