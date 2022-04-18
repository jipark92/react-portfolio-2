import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {



    return (
        <header>
            <nav>
                <ul>
                    <Link to='/'>
                        <li><h1>About Me</h1></li>
                    </Link>
                    <Link to='/projects'>
                        <li><h1>Projects</h1></li>
                    </Link>
                    <Link to='/contact'>
                        <li><h1>Contact</h1></li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}