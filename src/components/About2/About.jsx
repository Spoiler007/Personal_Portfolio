import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import React, { useEffect } from 'react'
import './about.css'
import { Fade } from "react-awesome-reveal";
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section class="about" id="about">
<div className='container'>
<div className="title">
<h2>
  <span> About</span> Me
  </h2>
  <hr />
</div>

            <div className='grid'>
                <div className="about-image" data-aos="flip-left">
                    <img src='./images/profile2.png' alt='about me' />
                    <div className="social-media">
                        <a href='https://instagram.com/itz_sanu0912?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><BsInstagram className='sm' /></a>
                        <a href='https://twitter.com/Ujjwalg13603397?t=v4hlc-0YtJRTicGYAI7fpA&s=09' target='_blank'><BsTwitter className='sm' /></a>
                        <a href='https://www.linkedin.com/in/ujjwal-ghosh-07495720a' target='_blank'><BsLinkedin className='sm' /></a>
                    </div>
                </div>


                <div className='about-content' data-aos="fade-up">
                    <h3 className="border" data-aos="flip-left">Hi There !</h3>
                    <p>
                        I'm <span className="name"> Ujjwal</span>. A Web developer, and I'm very passoniate and dedicated to my work. I have acquired the skills and knowledge necessary to make your projects a success. I enjoy every step of the design process, from discussion and collaboration.
                    </p>
                    <div className="about-personal-info">
                        <div><span>Name:</span><span>Ujjwal Ghosh</span></div>
                        <div><span>Age:</span><span>23 Years</span></div>
                        <div><span>Email:</span><span>ghoshujjwal196@gmail.com</span></div>
                        <div><span>Hobby:</span><span>Cricket</span></div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About;