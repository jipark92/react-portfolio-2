import React from 'react'

export default function AboutMe() {
    return (
        <div className='information-container'>
            <div className='about-me-container'>
                <div className='profile-picture-container'>
                    <img src="https://avatars.githubusercontent.com/u/93008833?v=4" alt="profile-pictures" className='profile-picture'/>
                </div>
                <h1>Hi, I am Ji Park</h1>
                <h2><u>Frontend Engineer</u></h2>
                <a href="">RESUME</a>
            </div>
            <div className='about-me-container-2'>
                <h2>Can an break-dancer teach themself to program? This portfolio website can be your answer.</h2>
                <h2>Web development allows me to express my creativity in a more satisfying way, to create with clear structure and to focus in on details in a way I've never been able to do before.</h2>
                <div className='favorite-tools'>
                    <h3>My Favorite Tools: </h3>
                    <img src="https://img.icons8.com/office/344/react.png" />
                    <img src="https://img.icons8.com/color/344/javascript--v1.png" />
                    <img src="https://img.icons8.com/ios-filled/344/html-5--v1.png" />
                    <img src="https://img.icons8.com/ios-filled/344/css.png" />
                    <img src="https://img.icons8.com/ios-filled/344/github.png" />
                </div>
            </div>
            <div></div>
        </div>
    )
}
