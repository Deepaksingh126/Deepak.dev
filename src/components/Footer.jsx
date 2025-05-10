import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="social-links flex-col">
            <Link to="https://github.com/Deepaksingh126" target="_blank"><i className="fab fa-github"></i> GitHub</Link>

            <div className="w-full flex flex-wrap justify-center items-center gap-1">
                <p className="mx- "> Made with ❤️ by Deepak</p>
                <p>© 2023 All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer;