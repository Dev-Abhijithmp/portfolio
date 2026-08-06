import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium px-3.5 py-2 rounded-xl transition-all duration-200 ${
      isActive
        ? darkMode
          ? "bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/30"
          : "bg-cyan-50 text-cyan-700 font-semibold border border-cyan-200"
        : darkMode
        ? "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
        : "text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 border-b backdrop-blur-xl ${
        darkMode
          ? "bg-[#0B0F19]/80 border-gray-800/80 text-gray-100"
          : "bg-white/80 border-gray-100/80 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Gradient */}
          <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight">
            <span className="w-3 h-3 rounded-full bg-cyan-500 animate-ping"></span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Abhijith
            </span>
          </Link>

          {/* Desktop Links & Theme Switcher */}
          <div className="hidden md:flex space-x-2 items-center">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About & Skills
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/contactus" className={navLinkClass}>
              Contact Us
            </NavLink>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800/80 border-gray-700 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-lg`}></i>
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-yellow-400"
                  : "bg-gray-100 border-gray-200 text-gray-700"
              }`}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-base`}></i>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2 flex flex-col">
            <NavLink to="/" end className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              About & Skills
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contactus" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
