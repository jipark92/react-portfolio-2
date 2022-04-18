import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>About Me /</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects /</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}