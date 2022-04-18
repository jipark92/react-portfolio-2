import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {

    const blah = (e) => {
        if (e.target.parentNode) {
            e.target.parentNode.style.color = "blue"
        } 
    }

    return (
        <header>
            <nav>
                <ul>
                    <Link to='/'>
                        <li onClick={blah}><h1>About Me</h1></li>
                    </Link>
                    <Link to='/projects'>
                        <li onClick={blah}><h1>Projects</h1></li>
                    </Link>
                    <Link to='/contact'>
                        <li onClick={blah}><h1>Contact</h1></li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}