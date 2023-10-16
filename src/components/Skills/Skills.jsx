import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import SkillBar from './SkillBar/SkillBar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BiLogoTelegram ,BiSolidSchool} from 'react-icons/bi'
import {CgCalendarDates} from 'react-icons/cg'
const skillsData = [
  {
    label: 'JavaScript',
    percentage: 90,
    style: `${styles['progress-line']} ${styles.js}`,
  },
  {
    label: 'React Js',
    percentage: 80,
    style: `${styles['progress-line']} ${styles.react}`,
  },
  {

    label: 'HTML5',
    percentage: 85,
    style: `${styles['progress-line']} ${styles.next}`,
  },
  {
    label: 'Tailwind CSS',
    percentage: 75,
    style: `${styles['progress-line']} ${styles.ts}`,
  },
]

const Skills = () => {


  const [isIntersected, setIntersected] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      thresold: 0.15,
    };

    const handleIntersection = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIntersected(true);
        observer.unobserve(entry.target)
      }
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section id='skills' className={styles.skills} ref={sectionRef}>
      <div className='container'>
        <div className={styles.title}>
          <h2><span>Education</span> & <span>Skills</span></h2>
          <hr />
        </div>

        <div className={styles.resume_row}>
        <div className={styles.column_left}>
            <header className={styles.sub_heading}>
              <h2>EDUCATION</h2>
            </header>

            <main className={styles.resume_contents}>
            <div className={styles.box}>
                <h4><CgCalendarDates style={{color:"black",fontSize:"20px"}}/> 2021 - 2024</h4>
                <h3>Bacholer Of Technology</h3>
                <p>Department of Information Technology <span>||</span> CGPA : 8.86 & Backlogs : 0(zero) </p>
                <h5 className={styles.vanue}><BiSolidSchool style={{color:"black",fontSize:"20px"}}/> Jalpaiguri Government Engineering College</h5>
                </div>

              <div className={styles.box}>
                <h4><CgCalendarDates style={{color:"black",fontSize:"20px"}}/> 2018 - 2021</h4>
                <h3>Diploma</h3>
                <p>Department of Electronics & Teli-Communication Engineering <span>||</span> CGPA : 8.80 || Percentage : 84.4 %  & Backlogs : 0(zero)</p>
                <h5 className={styles.vanue}><BiSolidSchool style={{color:"black",fontSize:"20px"}}/>Birla Institute Of Technology</h5>
              </div>

              <div className={styles.box}>
                <h4><CgCalendarDates style={{color:"black",fontSize:"20px"}}/> 2016 - 2018</h4>
                <h3>Intermediate</h3>
                <p>The West Bengal Council of Higher Secondary Education (WBCHSE) || Percentage : 69 %</p>
                <h5 className={styles.vanue}><BiSolidSchool style={{color:"black",fontSize:"20px"}}/>Chandrakona Jirat High School</h5>
              </div>
            </main>
          </div>
        </div>


        <header className={styles.sub_heading}>
        <h2>Skills</h2>
      </header>

        <div className={`grid ${styles['skills-grid']}`}>
          <div className={styles.content}>
            <h1>In<span> Designing</span><br />
              And <span>Developing</span>
            </h1>
            <p data-aos="fade-up">
              Everyday is a new challenge, and i'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast, I try to keep myself up to date.
            </p>
          </div>
          <div className={styles['skill-bars']} >
            {skillsData.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                style={isIntersected ? skill.style : ' '}

              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.flex} container`}>
          <div>
            <h3>I'm available for work</h3>
          </div>
          <div>
            <a href='#contact'>Contact Me <BiLogoTelegram /></a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;