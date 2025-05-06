import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {

    useEffect(() => {

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Skills section animation
        const skillsSection = document.querySelector('.card:nth-child(2)');
        const skillTags = document.querySelectorAll('.skill-tag');

             animateSkills();
      

        // Function to create continuous animation
        function animateSkills() {
            skillTags.forEach((tag, index) => {
                gsap.to(tag, {
                    scale: 1.2,
                    duration: 0.5,
                    yoyo: true,
                    repeat: -1,
                    delay: index * 0.2,
                    ease:"circ.inOut"
                });
            });
        }


    }, []);


    return (
        <div className="card">
            <h2>Skills</h2>
            <div className="skills-container">


                <span className="skill-tag"><i className="fab fa-html5"></i> HTML</span>
                <span className="skill-tag"><i className="fab fa-css3-alt"></i> CSS</span>
                <span className="skill-tag"><i className="fab fa-react"></i> React</span>
                <span className="skill-tag"><i className="fab fa-js"></i> JavaScript</span>
                <span className="skill-tag"><i className="fab fa-node-js"></i> Node js</span>
                <span className="skill-tag"><i className="fab fa-tailwind"></i> Tailwind CSS</span>
                <span className="skill-tag"><i className="fas fa-database"></i> mongoDB</span>
                <span className="skill-tag"><i className="fas fa-bolt"></i> vite</span>
                <span className="skill-tag"><i className="fas fa-code"></i> GSAP</span>
                <span className="skill-tag"><i className="fas fa-server"></i> express</span>
            </div>
        </div>
    );
}

export default Skills;