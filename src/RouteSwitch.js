import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path='/' element={<AboutMe/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
