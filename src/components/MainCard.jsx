import image from "../assets/deepak-image-01.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MainCard = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Skills section animation
    const skillsSection = document.querySelector(".card:nth-child(2)");
    const skillTags = document.querySelectorAll(".skill-tag");

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
          ease: "circ.inOut",
        });
      });
    }
  }, []);

  return (
    <>
      {/* intro Card  */}
      <div className="card">
        <h2>
          trust me i am a <span>developer</span>
        </h2>
        <p>
          Meet <span className="highlights">Deepak</span>, a self-taught tech
          enthusiast from Delhi with a{" "}
          <span className="highlights">commerce</span> background and a big
          vision. Passionate about web development, AI, and startups, he's on a
          mission to turn ideas into impactful solutions. Focused, curious, and
          always learning—{" "}
          <span className="highlights-2">
            {" "}
            Deepak is building his own path in the tech world.{" "}
          </span>
          <span className="gpt-tag">~ ChatGPT</span>
        </p>
        <div className="img">
          <img src={image} alt="deepak's image" />
        </div>
      </div>

      {/* skill Card  */}
      <div className="card">
        <h2>Skills</h2>
        <div className="skills-container">
          <span className="skill-tag">
            <i className="fab fa-html5"></i> HTML
          </span>
          <span className="skill-tag">
            <i className="fab fa-css3-alt"></i> CSS
          </span>
          <span className="skill-tag">
            <i className="fab fa-react"></i> React
          </span>
          <span className="skill-tag">
            <i className="fab fa-js"></i> JavaScript
          </span>
          <span className="skill-tag">
            <i className="fab fa-node-js"></i> Node js
          </span>
          <span className="skill-tag">
            <i className="fab fa-tailwind"></i> Tailwind CSS
          </span>
          <span className="skill-tag">
            <i className="fas fa-database"></i> mongoDB
          </span>
          <span className="skill-tag">
            <i className="fas fa-bolt"></i> vite
          </span>
          <span className="skill-tag">
            <i className="fas fa-code"></i> GSAP
          </span>
          <span className="skill-tag">
            <i className="fas fa-server"></i> express
          </span>
        </div>
      </div>

      {/* message Card */}

      <div className="card">
        <h2>Send me a message</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="e23227b3-e9b3-4f57-a2a8-82469f3f248f"
          />
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default MainCard;
