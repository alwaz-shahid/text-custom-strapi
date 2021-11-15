import React from 'react'
import Navbar from '../Navbar'

const Layout = ({children}) => {
    return (
        <section className="layout">
            <Navbar/>
            {children}
        </section>
    )
}

export default Layout
