import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {

    const blah = (e) => {
        if (e.target.parentNode.id === "1") {
            e.target.parentNode.style.color = "rgb(0, 204, 255)"
        } else if (e.target.parentNode.id === "2"){
            e.target.parentNode.style.color = "rgb(33,201,152)"
        } else if (e.target.parentNode.id === "3"){
            e.target.parentNode.style.color = "rgb(241, 94, 119)"
        }
    }

    return (
        <header>
            <nav>
                <ul>
                    <Link to='/'>
                        <li onClick={blah} id="1"><h1>About Me</h1></li>
                    </Link>
                    <Link to='/projects'>
                        <li onClick={blah} id="2"><h1>Projects</h1></li>
                    </Link>
                    <Link to='/contact'>
                        <li onClick={blah} id="3"><h1>Contact</h1></li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}