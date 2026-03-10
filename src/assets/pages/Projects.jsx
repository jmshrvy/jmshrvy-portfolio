import Card from "../components/Card"
import portfolio from "../../../public/img/portfolio.png";
import calculator from "../../../public/img/calculator.png";
import velodrop from "../../../public/img/velodrop.png";
import todoList from "../../../public/img/todo.png";
import Footer from "../components/Footer";

export default function Projects() {

    const projects = [
        {
            name: "Portfolio Website",
            image: `${portfolio}`,
            tech: "React.js • HTML • CSS • Vite",
            description: "Developed a responsive portfolio website using HTML, CSS and React.js. Design with modern navigation, and mobile friendly layout.",
            link: "https://jmshrvy.vercel.app/"
        },
        {
            name: "Velodrop",
            image: `${velodrop}`,
            tech: "React.js • HTML • CSS • Vite",
            description: "Designed and implemented an intuitive front-end interface for a bicycle e-commerce platform. Focused on clear product categorization and also mobile first-interface, ensuring smooth navigation and experience.",
            link: "https://velodrop.vercel.app/"
        },
        {
            name: "Todo-List",
            image: `${todoList}`,
            tech: "JavaScript • HTML • CSS",
            description: "A dynamic To-Do List application built with HTML, CSS, and JavaScript that allows users to manage daily tasks by adding and deleting items with real-time UI updates.",
            link: "https://jms-hrvy-todo.vercel.app/"
        },
        {
            name: "Simple Calculator",
            image: `${calculator}`,
            tech: "JavaScript • HTML • CSS",
            description: "A simple calculator application design to perform fundamental arithmetic operations. The clean interface making it suitable students or anyone needing quick math on the go.",
            link: "https://jms-hrvy-basic-calculator.vercel.app/"
        }
    ]

    return (
        <div className="project-container">

            {projects.map((project, index) => (
            <Card
                key={index}
                grid={`box${index + 1}`}
                class="project-content">
                <div className="project-layout">

                    <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                    />

                    <h3 className="project-name">{project.name}</h3>

                    <p className="project-tech">{project.tech}</p>

                    <p className="project-description">
                        {project.description}
                    </p>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                    >
                        Visit Project
                    </a>

                </div>
            </Card>
            ))}

            <Footer grid="footer" />
        </div>
    )
}