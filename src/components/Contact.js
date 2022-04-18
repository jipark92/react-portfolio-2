import React from 'react'

export default function Contact() {
    return (
        <div className='contact-container'>

            <div className='real-contacts-container'>

                <div className='phone-container'>
                    <img src="https://img.icons8.com/flat-round/344/phone.png" alt="phone-logo"/>
                    <p>555-555-5555</p>
                </div>

                <div className='address-container'>
                    <div className='address-picture'>
                        <img src="https://img.icons8.com/fluency/344/address.png" alt="address-logo"/>
                    </div>
                    <div className='address'>
                        <p>1234 Test Street</p>
                        <p>city,state,12345</p>
                    </div>
                </div>

                <div className='email-container'>
                    <img src="https://img.icons8.com/fluency/344/email-open.png" alt="email-logo"/>
                    <p>jiyongprk@gmail.com</p>
                </div>
            </div>

            <div className='social-media-container'>
                <a href="https://t.co/2Ed6qCNfkO" target='_blank'><img src="https://img.icons8.com/external-justicon-flat-justicon/344/external-linkedin-social-media-justicon-flat-justicon.png" alt="linkedin-logo"/></a>
                <a href="https://github.com/norfkorean" target='_blank'><img src="https://img.icons8.com/color/344/github--v1.png" alt="github-logo"/></a>
                <a href="https://twitter.com/norfkorean" target='_blank'><img src="https://img.icons8.com/fluency/344/twitter.png" alt="twitter-logo"/></a>
                <a href="https://www.tiktok.com/@norfkorean" target='_blank'><img src="https://img.icons8.com/color/344/tiktok--v1.png" alt="tiktok-logo"/></a>
                <a href="https://www.instagram.com/bboy_ji" target='_blank'><img src="https://img.icons8.com/color/344/instagram-new--v1.png" alt="instagram-logo"/></a>
            </div>
        </div>
    )
}
