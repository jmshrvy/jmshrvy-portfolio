import { useState, useEffect } from "react";
import Carousel from "../components/Carrousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

export default function Home() {
    const [accordionOpen, setAccordionOpen] = useState(null);

    const expertiseList = [
        {
            title: "Web Development",
            icon: "bx bx-code-alt",
            description: "Building responsive and modern web applications using React, JS, HTML, CSS."
        },
        {
            title: "UI/UX Design",
            icon: "bx bx-palette",
            description: "Designing intuitive user interfaces and experiences for web and mobile apps."
        },
        {
            title: "Mobile-first Design",
            icon: "bx bx-mobile-alt",
            description: "Creating layouts optimized for mobile devices first, then scaling up."
        },
        {
            title: "Graphic Design",
            icon: "bx bx-image",
            description: "Creating visual content and graphics for web and marketing materials."
        }
    ];

    const texts = [
        "Hello, I'm James Harvey Baloto",
        "I'm a Front-end Developer",
        "Glad to see you here!"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        let typingSpeed = isDeleting ? 30 : 60;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));

                if (displayedText === currentText) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));

                if (displayedText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentIndex]);

    return (    
        <div className="home-container">
            <div className="card welcome-card" style={{ gridArea: "welcome"}}>
                <h2 className="card-title">Welcome!</h2>
                <p className="date">
                {new Date().toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric", 
                    month: "long",     
                    day: "numeric" 
                })}
                </p>
                <div className="welcome-text-container">            
                    <p className="welcome-text">{displayedText}</p>
                </div>
            </div>

            <Card grid="skills" 
                icon="bx bx-git-compare" 
                title="Skillset" 
                description=""
                class="skills-carousel">

                <Skills />
                <Skills class="track2"/>
            </Card>

            <Card grid="expertise" 
                icon="bx bx-tent" 
                title="Expertise" 
                description="">

                <div className="accordion">
                    {expertiseList.map((item, idx) => (
                        <div key={idx} className="accordion-item">
                            <button
                                className={`accordion-header ${accordionOpen === idx ? "active" : ""}`}
                                onClick={() => setAccordionOpen(accordionOpen === idx ? null : idx)}
                            >
                                <i className={item.icon}></i>
                                {item.title}
                            </button>
                            {accordionOpen === idx && (
                                <div className="accordion-content">
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
            </Card>

            <Card grid="carousel" 
                icon="bx bx-grid-column-right" 
                title="Selected Work" 
                description="">

                <Carousel />
                
            </Card>
            <Footer grid="footer" />
        </div>
    );
}