import React from 'react'
import './footer.css'
import { FaTwitterSquare, FaPhoneFlip } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { TfiEmail } from 'react-icons/tfi'

const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className='footer_logo'>Ujjwal Ghosh</a> */}
            <div className='footer'>
                <div className='footer_info'>
                    <div className="address">
                        <div className="address_info">

                            <h4>Find Me</h4>
                            <span> <ImLocation2 className='address_icon' /> Paschim Medinipur, West Bengal, PIN - 721260</span>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="phone_info">

                            <h4>Call Me</h4>
                            <span> <AiFillPhone className='phone_icon' /> +91 7584945367</span>
                        </div>
                    </div>


                    <div className="email">
                        <div className="email_info">

                            <h4>Mail Me</h4>
                            <span><TfiEmail className='email_icon' /> ghoshujjwal196@gmail.com</span>
                        </div>
                    </div>

                </div>

                <div className='page_links'>
                    <h2>Important Links</h2>
                    <ul className='permalinks'>

                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#testinomials' >Testimonial</a></li>
                        <li><a href='#contact' >Contact</a></li>
                    </ul>
                </div>
            </div>

<div className='social_media'>
            <h2>Follow Me on Social Media</h2>
            <div className='footer_socials'>
                <a href='https://instagram.com/itz_sanu0912?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><BsInstagram /></a>
                <a href='https://twitter.com/Ujjwalg13603397?t=v4hlc-0YtJRTicGYAI7fpA&s=09' target='_blank'><BsTwitter /></a>
                <a href='https://www.linkedin.com/in/ujjwal-ghosh-07495720a' target='_blank'><BsLinkedin /></a>
            </div>
</div>
            <div className='footer_copyright'>
                <small>&copy; Ujjwal Ghosh. All rights reserved</small>

            </div>

        </footer>
    )
}

export default Footer;