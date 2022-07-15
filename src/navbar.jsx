import "./index.css";
import "./components/navbaritem";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (

     <nav className="flex   h-12 justify-between">
      <div className="mx-3 p-3 text-2xl text-#041C32 font-serif text-cyan-700">Abhijith</div>
     

     <div className="flex items-center">
     <NavLink
       to="/home"
       className={({isActive})=>`text-black hover:bg-green-300 hover:text-white block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'bg-green-300':''}`}
     >
       Home
     </NavLink>

     <NavLink
       to="/about"
       className={({isActive})=>`text-black hover:bg-green-300 hover:text-white block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'bg-green-300':''}`}
     >
       About
     </NavLink>
     <NavLink
       to="/products"
       className={({isActive})=>`text-black hover:bg-green-300 hover:text-white block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'bg-green-300':''}`}
     >
       Products
     </NavLink>

     <NavLink
       to="/contactus"
       className={({isActive})=>`text-black hover:bg-green-300 hover:text-white block  rounded-md text-base font-medium py-2 px-2 m-4 font-serif ${isActive?'bg-green-300':''}`}
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
