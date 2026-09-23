import './App.css';
import './index.css';
import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";
import Home from './homepage';
import Contactus from './contactus';
import Projects from './projects';
import About from './about';
import { ThemeProvider, useTheme } from './ThemeContext';
import { KotlinIcon, ComposeIcon } from './components/TechIcons';

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col justify-between ${
      darkMode ? 'bg-[#070B13] text-gray-100' : 'bg-slate-50/80 text-gray-900'
    }`}>
      <div>
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
      </div>

      {/* Aesthetic Footer */}
      <footer className={`py-10 px-6 border-t transition-colors duration-300 mt-16 ${
        darkMode ? 'bg-[#0A0F1D]/80 border-white/5 text-gray-400' : 'bg-white border-gray-200 text-gray-600'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-sm tracking-tight text-white dark:text-gray-100">
                Abhijith M P
              </span>
              <span className="text-gray-600 dark:text-gray-500">•</span>
              <span className="text-xs font-mono text-kotlin-light flex items-center gap-1">
                <KotlinIcon className="w-3.5 h-3.5" /> Kotlin & Jetpack Compose
              </span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">
              High-performance Android, C++ Audio Engines (Google Oboe), & IoT Systems.
            </p>
          </div>

          {/* Center Badges */}
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-kotlin/10 text-kotlin-light border border-kotlin/20 flex items-center gap-1">
              <KotlinIcon className="w-3.5 h-3.5" /> Kotlin 2.0+
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-compose/10 text-compose border border-compose/20 flex items-center gap-1">
              <ComposeIcon className="w-3.5 h-3.5" /> Jetpack Compose
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10 hidden sm:inline-block">
              Oboe C++
            </span>
          </div>

          {/* Contact & Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kotlin-light transition flex items-center gap-1.5"
            >
              <i className="fa-brands fa-github text-sm"></i> GitHub
            </a>
            <a
              href="mailto:111abhiabhi@gmail.com"
              className="hover:text-compose transition flex items-center gap-1.5"
            >
              <i className="fa-solid fa-envelope text-xs"></i> Email
            </a>
            <a
              href="tel:+919497747142"
              className="hover:text-cyan-400 transition flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone text-xs"></i> Phone
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <span>© {new Date().getFullYear()} Abhijith M P. All rights reserved.</span>
          <span>Ernakulam, Kerala, India</span>
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
