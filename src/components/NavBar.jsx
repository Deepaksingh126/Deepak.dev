import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full flex items-center justify-around pt-5 mb-12">
      <h1 className="text-3xl font-bold">Deepak.dev</h1>
      <nav className="flex gap-8">

        <NavLink className={({ isActive }) =>
          `${isActive ? "bg-sky-500/40" : ""} text-white font-bold py-1 px-3 rounded-xl hover:bg-sky-500/40`
        } to="/">home</NavLink>

        <NavLink className={({ isActive }) =>
          `${isActive ? "bg-sky-500/40" : ""} text-white font-bold py-1 px-3 rounded-xl hover:bg-sky-500/40`
        } to="/project">projects</NavLink>

        <NavLink className={({ isActive }) =>
          `${isActive ? "bg-sky-500/40" : ""} text-white font-bold py-1 px-3 rounded-xl hover:bg-sky-500/40`
        } to="/blogs">blogs</NavLink>
        
      </nav>
    </header>
  );
};

export default NavBar;