import React from 'react'

export default function AboutMe() {
    return (
        <div className='information-container'>
            <div className='about-me-container'>
                <div className='profile-picture-container'>
                    <img src="https://avatars.githubusercontent.com/u/93008833?v=4" alt="profile-pictures" className='profile-picture'/>
                </div>
                <h1>Hi, I am Ji Young Park</h1>
                <h2><u>Frontend Engineer</u></h2>
            </div>
            <div className='about-me-container-2'>
                <h2>Can an break-dancer teach themself to program? This portfolio website can be your answer.</h2>
                <h2>Web development allows me to express my creativity in a more satisfying way, to create with clear structure and to focus in on details in a way I've never been able to do before.</h2>
                <h2>I love showing my creativity on the internet</h2>
            </div>
        </div>
    )
}
