import { useState } from "react";
import Card from "../components/Card"
import Carousel from "../components/Carrousel"
import Footer from "../components/Footer"
import Skills from "../components/Skills"
import InnerEduc from "../components/InnerEduc"
import profile from '../../../public/img/profile.png'
import BSULogo from '../../../public/img/bsu-logo.png'
import DILGLogo from '../../../public/img/dilg-logo.png'
import TradeLogo from '../../../public/img/trade-logo.png'

export default function About() {

    const [expanded, setExpanded] = useState(false);

    const text = `I'm an aspiring Front-End Developer with a love for designing clean, responsive, and user-friendly websites. I enjoy developing ideas into interactive designs with HTML, CSS, JavaScript, and React.js, and I'm continuously learning new frameworks and tools to improve my abilities.

    My goal is to create user-friendly websites and applications that not only look amazing but also work well across all devices. I'm excited to advance in the profession, work with teams, and contribute to significant initiatives that have an impact.`;


    return (
        <div className="about-container">
            <Card grid="box1" 
                icon="" 
                title="" 
                description=""
                class="about-welcome">

                <div className="welcome-container">
                    <img 
                        src={profile}
                        alt="profile"
                        className="welcome-profile"
                    />

                    <h1 className="welcome-title">
                        My name is James Harvey, <br />
                        I’m a Front-end Developer <br />
                        living in <b>Bulacan</b>
                    </h1>

                    <p className="welcome-desc">
                        I specialize in building responsive and user-friendly web interfaces using modern front-end technologies, focusing on clean design, performance, and intuitive user experiences.
                    </p>

                    <div className="welcome-socials">

                        <a href="https://github.com/jmshrvy" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/jamesharveybaloto/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a href="https://instagram.com/jms.hrvy/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </Card>
            <Card
                grid="box2"
                icon="bx bx-user"
                title="About"
                class="about-card-content"
                description={
                    <>
                    <span className={expanded ? "" : "truncate"}>
                        {text}
                    </span>

                    <button
                        className="see-more-btn"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "See less" : "See more"}
                    </button>
                    </>
                }
            />
            <Card grid="box3" 
                icon="bx bx-grid-column-right" 
                title="Selected Work" 
                description="">

                <Carousel />
                
            </Card>
            <Card 
                grid="box4" 
                icon="bx bx-education educ-icon"
                title="Education" 
                description=""
                class="education"
            >
                <InnerEduc 
                    schoolLogo={BSULogo} 
                    course="Bachelor of Science in Information Technology"
                    schoolName="Bulacan State University - Sarmiento Campus" 
                    year="Aug 2021 - July 2025"
                />

                <InnerEduc 
                    schoolLogo={TradeLogo} 
                    course="TVL - Computer Programming"
                    schoolName="San Jose Del Monte National Trade School" 
                    year="June 2015 - July 2021"
                />
            </Card>

            <Card grid="skills" 
                icon="bx bx-git-compare" 
                title="Skillset" 
                description=""
                class="skills-carousel">

                <Skills />
                <Skills class="track2"/>
            </Card>

            <Card grid="box5" 
                icon="bx bx-briefcase-alt-2 exp-icon" 
                title="Experience" 
                description="">
                <InnerEduc 
                    schoolLogo={DILGLogo} 
                    course="IT Staff Intern"
                    schoolName="DILG San Jose Del Monte" 
                    year="Feb 2025 - May 2025"
                />
                </Card>
            <Footer grid="footer"/>
        </div>
    )
}