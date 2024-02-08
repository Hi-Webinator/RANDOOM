import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Work from '../Components/Work/Work';
import Contact from '../Components/Contact/Contact';

const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Hero} />
            <Route path='home' Component={Hero} />
            <Route path='about' Component={About} />
            <Route path='works' Component={Work} />
            <Route path='contact' Component={Contact} />
        </Routes>
    )
}

export default Routers
