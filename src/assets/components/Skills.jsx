import skill1 from "../../../public/img/1.png";
import skill2 from "../../../public/img/2.png";
import skill3 from "../../../public/img/3.png";
import skill4 from "../../../public/img/4.png";
import skill5 from "../../../public/img/5.png";
import skill6 from "../../../public/img/6.png";
import skill7 from "../../../public/img/7.png";
import skill8 from "../../../public/img/8.png";
import skill9 from "../../../public/img/9.png";

export default function Skills(props) {

    const skills = [
        skill1, skill2, skill3,
        skill4, skill5, skill6,
        skill7, skill8, skill9
    ];

    return (
        <div className={`skills-track ${props.class}`}>
            {[...skills, ...skills].map((skill, index) => (
            <img key={index} src={skill} alt="skill" className="skill-icon" />
            ))}
        </div>
    );
}