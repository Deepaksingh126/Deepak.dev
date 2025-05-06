import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1>Deepak.dev</h1>
      <nav>


        <Link to="/">home</Link>
        <Link to="/project">projects</Link>
        <Link to="/blogs">blogs</Link>
      </nav>
    </header>
  );
};

export default NavBar;