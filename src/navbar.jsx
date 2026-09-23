import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { KotlinIcon, ComposeIcon } from "./components/TechIcons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
      isActive
        ? darkMode
          ? "bg-kotlin/15 text-kotlin-light border border-kotlin/30 shadow-sm shadow-kotlin/10"
          : "bg-kotlin/10 text-kotlin-dark font-bold border border-kotlin/25"
        : darkMode
        ? "text-gray-300 hover:text-white hover:bg-white/5"
        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-xl ${
        darkMode
          ? "bg-[#070B12]/85 border-white/5 text-gray-100"
          : "bg-white/85 border-gray-200/70 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Kotlin / Compose Branding */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-kotlin via-kotlin-pink to-compose shadow-md group-hover:scale-105 transition-transform duration-200 p-0.5">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${darkMode ? "bg-[#070B12]" : "bg-white"}`}>
                <KotlinIcon className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight bg-gradient-to-r from-kotlin via-kotlin-pink to-cyan-400 bg-clip-text text-transparent">
                Abhijith M P
              </span>
              <span className="text-[10px] font-mono tracking-wider text-gray-400 -mt-1 flex items-center gap-1">
                <ComposeIcon className="w-2.5 h-2.5" />
                Kotlin & Compose
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-1.5 items-center">
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
              Contact
            </NavLink>

            {/* Divider */}
            <div className={`h-5 w-px mx-2 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}></div>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:text-black hover:bg-gray-100"
              }`}
              title="GitHub Profile (Dev-Abhijithmp)"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github text-base"></i>
            </a>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-white/5 border-white/10 text-amber-400 hover:bg-white/10"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-base`}></i>
            </button>

            {/* Quick Action Button */}
            <Link
              to="/contactus"
              className="ml-2 px-3.5 py-1.5 bg-gradient-to-r from-kotlin to-compose hover:opacity-90 text-white font-semibold rounded-xl text-xs shadow-sm hover:shadow-kotlin/20 transition duration-200 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-paper-plane text-[10px]"></i> Let's Talk
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border text-sm ${
                darkMode ? "bg-white/5 border-white/10 text-gray-300" : "bg-gray-100 border-gray-200 text-gray-700"
              }`}
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border text-sm ${
                darkMode ? "bg-white/5 border-white/10 text-amber-400" : "bg-gray-100 border-gray-200 text-gray-700"
              }`}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border ${
                darkMode ? "bg-white/5 border-white/10 text-gray-200" : "bg-gray-100 border-gray-200 text-gray-800"
              }`}
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-base`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className={`md:hidden pb-4 pt-2 space-y-1.5 flex flex-col border-t mt-2 ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
            <NavLink to="/" end className={navLinkClass} onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-house text-xs w-4"></i> Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-user text-xs w-4"></i> About & Skills
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-layer-group text-xs w-4"></i> Projects
            </NavLink>
            <NavLink to="/contactus" className={navLinkClass} onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-envelope text-xs w-4"></i> Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
