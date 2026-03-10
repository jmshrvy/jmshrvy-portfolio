import { useState, useEffect, useRef } from "react";
import Project1 from "../../../public/img/velodrop.png"
import Project2 from "../../../public/img/calculator.png"
import Project3 from "../../../public/img/portfolio.png"

export default function Carousel() {

    const images = [
            Project1, Project2, Project3
    ];

    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const trackRef = useRef();

    const slides = [
        images[images.length - 1],
        ...images,
        images[0]
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = () => {

        if (index === slides.length - 1) {
        setTransition(false);
        setIndex(1);
        }

        if (index === 0) {
        setTransition(false);
        setIndex(slides.length - 2);
        }
    };

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => setTransition(true));
        }
    }, [transition]);

    return (
    <div className="carousel">
        <div
            ref={trackRef}
            className="carousel-track"
            style={{
                transform: `translateX(-${index * 100}%)`,
                transition: transition ? "transform 0.6s ease-in-out" : "none"
            }}
             onTransitionEnd={handleTransitionEnd}>
            {slides.map((img, i) => (
            <img key={i} src={img} className="carousel-image" />
            ))}
        </div>
    </div>
    );
}