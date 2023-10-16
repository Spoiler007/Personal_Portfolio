import React, { useEffect } from 'react'
import styles from './About.module.css'
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Fade } from "react-awesome-reveal";
import Aos from 'aos';
import 'aos/dist/aos.css'



const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const date = new Date();
  // const showTime = date.getHours()
  //     + ':' + date.getMinutes()
  //     + ":" + date.getSeconds();

  return (
    <section id='about' className={styles.about}>
      <div className='container'>
        <div className={styles.title}>
          <h2>
            <span> About</span> Me
            </h2>
            <hr />
          </div>
            {/* <h1 align="center">Current Time</h1>
            <h2 align="center"> {showTime}</h2> */}


        <div className='grid'>
          {/* 
          <div className={styles['about-img']} data-aos="flip-left">
            <img src='./images/profile2.png' alt='about me' />
            <div className="social-media">
            <a href='https://instagram.com/itz_sanu0912?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><BsInstagram className='sm'/></a>
            <a href='https://twitter.com/Ujjwalg13603397?t=v4hlc-0YtJRTicGYAI7fpA&s=09' target='_blank'><BsTwitter className='sm'/></a>
            <a href='https://www.linkedin.com/in/ujjwal-ghosh-07495720a' target='_blank'><BsLinkedin className='sm'/></a>
            </div>
          </div>
          */}


          <div className="about-image">
            <img src='./images/profile2.png' alt='about me' />
            <div className="social-media">

              <a href='https://instagram.com/itz_sanu0912?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><BsInstagram className='sm' /></a>
              <a href='https://twitter.com/Ujjwalg13603397?t=v4hlc-0YtJRTicGYAI7fpA&s=09' target='_blank'><BsTwitter className='sm' /></a>
              <a href='https://www.linkedin.com/in/ujjwal-ghosh-07495720a' target='_blank'><BsLinkedin className='sm' /></a>
            </div>
          </div>


          <div className={styles['about-content']} data-aos="fade-up">
            <h3 className={styles.border} data-aos="flip-left">Hi There!</h3>
            <p>
              I'm <span className={styles.name}> Ujjwal</span>. A Web developer, and I'm very passoniate and dedicated to my work. I have acquired the skills and knowledge necessary to make your projects a success. I enjoy every step of the design process, from discussion and collaboration.
            </p>
          </div>

          <div class="about-personal-info">
            <div><span>Name:</span><span>J Antony</span></div>
            <div><span>Age:</span><span>24 Years</span></div>
            <div><span>Email:</span><span>xyz@gmail.com</span></div>
            <div><span>Hobby:</span><span>Cricket</span></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About;