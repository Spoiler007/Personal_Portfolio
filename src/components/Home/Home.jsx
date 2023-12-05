import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {FaDownload} from 'react-icons/fa'

const PDF_FILE_URL = 'http://localhost:3000/Ujjwal_Resume3.pdf'
const Home = () => {
    const items = ['UI Designer', 'Frontend Developer'];
    const [currentIndex, setCurrentIndex] = useState(0);

const downloadFileURL = (url)=>{
const fileName = url.split('/').pop()
const aTag = document.createElement('a');
aTag.href=url
aTag.setAttribute('download', fileName)
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
}

    const {text} = useTypewriter({
        words: ['Frontend', 'Developer'],
        loop: {},
        typeSpeed:120,
        deleteSpeed:80,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id='home'>
            <div className='container'>
                <div className={styles.home}>
                    <div className={styles['home-content']}>
                        <div className={styles['home-title']}>
                            <h2>Hey, I'm</h2>
                            <h1>Ujjwal</h1>
                        </div>
                        <div className={styles['text-wrapper']}>
                                Creative{" "}
                            <p>
                                <span className={styles.items}>
                                    {items[currentIndex]}
                                </span>
                                <span style={{color:'red',fontSize:"larger"}} className='cursor'>
                                <Cursor cursorStyle='|'/>
                                </span> 
                                {/* <span style={{color:'red', fontWeight:'bold'}}>
                                    {text}
                                </span>
                               */}
                            </p>
                        </div>
                        
                        <div className={styles.links}>
                            <div className={styles.link}>
                                <a href='#projects'>View Projects
                                </a>
                            </div>
                            <span className={styles.divider}>or</span>
                            <div className={styles.link}>
                                <a href='#about'>Read About Me
                                </a>
                            </div>
                        </div>
                        
                        <div className={styles.scroll}>
                            <a href='#about'>
                                <span></span>
                            </a>
                        </div>
                        <button className='cvbtn' onClick={()=>{downloadFileURL(PDF_FILE_URL)}} >Resume <FaDownload/></button>
                    </div>
                    <div className={styles.circle}>
                       
                        <div className={styles.content}>
                            <img src='./images/home-right.png' alt='Ujjwal Ghosh' />
                            <h2>Ujjwal Ghosh <br /> <span /> Web Developer</h2>
                            <a href='#contact'>Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Home;