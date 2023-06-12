import './App.css';
import './index.css'
import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";
import Home from './homepage';

import Contactus from './contactus';
import Projects  from './projects';
import About from './about';
function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<Contactus/>}/>
      <Route path='projects' element={<Projects/>}/>
     </Routes>
     </>
    
  );
}

export default App;
