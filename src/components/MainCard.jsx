import image from '../assets/deepak-image-01.jpg';

const MainCard = () => {
    return (
        <div className="card">
            <h2>trust me i am a <span>developer</span></h2>
            <p>
                Meet <span className="highlights">Deepak</span>, a self-taught tech enthusiast from Delhi with a <span
                    className="highlights">commerce</span> background and a big vision.
                Passionate about web development, AI, and startups, he's on a mission to turn ideas into impactful
                solutions. Focused, curious, and always learning— <span className="highlights-2"> Deepak is building his own
                    path in the tech world. </span>

                <span className="gpt-tag">~ ChatGPT</span>
            </p>
            <div className="img"><img src={image} alt="deepak's image" /></div>
        </div>
    )
}

export default MainCard;