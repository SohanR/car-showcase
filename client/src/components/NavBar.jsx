import { Link, NavLink } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import rmjL from "./../assets/img/rmjlogo.png";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    console.log("auth at nav", auth);
    setLoggedIn(JSON.parse(auth));
  }, [loggedIn]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    // Handle logout logic
    setLoggedIn(false);
    // Additional logout logic if needed
  };

  return (
    <header className="header bg-[#040405d4] fixed top-0 w-full py-2" id="header">
      <div className="flex flex-between">
        <nav className="nav container  flex items-center">
          <Link to="/" className="nav__logo">
            <img src={rmjL} className="h-[40px] w-[150px]" alt="Logo" />
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <NavLink to="/" className="nav__link active">
                Home
              </NavLink>
              <NavLink to="/cars" className="nav__link">
                Cars
              </NavLink>
              <NavLink to="/aboutus" className="nav__link">
                About Us
              </NavLink>
              <NavLink to="/Contact" className="nav__link">
                Contact Us
              </NavLink>
              {loggedIn ? (
                <DropDownMenu login={setLoggedIn} />
              ) : (
                <NavLink to="/login" className="nav__link">
                  Join As Member
                </NavLink>
              )}
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </nav>

        <div className="relative inline-block  lg:hidden">
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center items-center p-2 rounded-md"
          >
            <span className="text-white">Menu</span>
          </button>

          {isOpen && (
            <div className=" absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
              <ul className="flex flex-col gap-4 pl-3 p-2">
              <NavLink to="/" className="nav__link active">
                Home
              </NavLink>
              <NavLink to="/cars" className="nav__link">
                Cars
              </NavLink>
              <NavLink to="/aboutus" className="nav__link">
                About Us
              </NavLink>
              <NavLink to="/Contact" className="nav__link">
                Contact Us
              </NavLink>
              {loggedIn ? (
                <DropDownMenu login={setLoggedIn} />
              ) : (
                <NavLink to="/login" className="nav__link">
                  Join As Member
                </NavLink>
              )}
            </ul>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
