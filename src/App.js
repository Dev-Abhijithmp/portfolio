import './App.css';
import './index.css';
import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";
import Home from './homepage';
import Contactus from './contactus';
import Projects from './projects';
import About from './about';
import { ThemeProvider, useTheme } from './ThemeContext';

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0B0F19] text-gray-100' : 'bg-slate-50 text-gray-900'}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contactus' element={<Contactus />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </main>

      <footer className={`py-8 px-6 border-t transition-colors duration-300 ${darkMode ? 'bg-[#0D1322] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Abhijith M P. Crafted with React & Tailwind CSS.</p>
          <div className="flex gap-4">
            <a href="mailto:111abhiabhi@gmail.com" className="hover:text-cyan-500 transition">Email</a>
            <a href="tel:+919497747142" className="hover:text-cyan-500 transition">Phone</a>
            <span className="text-gray-500">Ernakulam, Kerala</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
