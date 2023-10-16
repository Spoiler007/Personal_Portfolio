import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import NavbarLinks from './NavbarLinks/NavbarLinks'
// import './navbar.css'


const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonial', label: 'Testimonial' },
    { id: 'contact', label: 'Contact' },
]


const Navbar = () => {

    const [windowwidth, setWindowwidth] = useState(window.innerWidth);
    const [showLinks, setShowLinks] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('')
    useEffect(() => {
        const handleResize = () => {
            setWindowwidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowwidth]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };
        const handleInteset = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }
        const observer = new IntersectionObserver(handleInteset, options);
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        })
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            })
        }
    }, [])

    const handleSectionClick = (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            });
        }
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);

    }

    return (
        <>

            <header className={styles.header}>
                <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                    <div className='container'>
                        <div className={styles['navbar-wrapper']}>
                            <div>
                                <a href='index.html' className={styles.logo}>
                                    {/* <img src="./images/Text_Signature.png" alt="Logo" />*/}
                                    {/*<img src="./images/icon.png" alt="Logo" />*/}
                                    <img src="./images/icon2.png" alt="Logo" />

                                </a>
                            </div>
                            <div className={`${styles["navbar-links"]} ${showLinks ? styles.show : ""}`}>
                                <ul>
                                    {navLinks.map(link => (
                                        <NavbarLinks
                                            key={link.id}
                                            href={`#${link.id}`}
                                            label={link.label}
                                            onClick={handleSectionClick}
                                            active={activeSection === link.id}
                                        />
                                    ))}
                                </ul>
                            </div>
                            {windowwidth <= 890 && (
                                <div className={`${styles["toggle-button"]} ${showLinks ? styles.open : ""}`} onClick={toggleLinks}>
                                    <span className={styles.line}></span>
                                    <span className={styles.line}></span>
                                    <span className={styles.line}></span>

                                </div>
                            )}

                        </div>
                    </div>

                </nav>

            </header>


        </>
    )
}

export default Navbar;