import "./index.css";
import "./components/navbaritem";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (

     <nav className="flex items-start  justify-between  h-8 mb-6" >
      <div className="mx-5 p-3 text-2xl text-#041C32 font-serif text-cyan-700">Abhijith</div>
        

     <div className=" flex justify-start">
     <NavLink
       to="/home"
       className={({isActive})=>`text-blue-900 text-2xl hover:text-green-600 block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'text-blue-900 text-2xl':''}`}
     >
       Home
     </NavLink>

     <NavLink
       to="/about"
       className={({isActive})=>`text-blue-900 text-2xl hover:text-green-600 block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'text-blue-900 text-2xl':''}`}
     >
       About
     </NavLink>
     <NavLink
       to="/projects"
       className={({isActive})=>`text-blue-900 text-2xl hover:text-green-600 block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'text-blue-900 text-2xl':''}`}
     >
       Projects
     </NavLink>

     <NavLink
       to="/contactus"
       className={({isActive})=>`text-blue-900 text-2xl hover:text-green-600 block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'text-blue-900 text-2xl':''}`}
     >
       Contact us
     </NavLink>
     </div>

     {/* <div className="sm:hidden m-6">
   <svg class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
       <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
     </svg>
   </div> */}
   </nav>
   
  );
}
export default Navbar;
