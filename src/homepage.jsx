import { Link } from "react-router-dom";
import { useState } from "react";
import profileImg from "./abhijith.jpg";
import { useTheme } from "./ThemeContext";

function Home() {
  const { darkMode } = useTheme();
  const [selectedTech, setSelectedTech] = useState(null);

  // Terminal interactive state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState([
    { cmd: "whoami", res: "Abhijith M P — Senior Mobile, IoT & Edge AI Engineer" },
    { cmd: "cat status.txt", res: "⚡ Available for high-impact Mobile, Embedded & AI projects." },
  ]);

  const handleTerminalCmd = (cmdToRun) => {
    const command = (cmdToRun || terminalInput).trim().toLowerCase();
    let response = "";

    switch (command) {
      case "whoami":
        response = "Abhijith M P — Senior Mobile, IoT & Edge AI Engineer based in Kerala, India.";
        break;
      case "skills":
      case "cat skills":
        response = "Flutter, Dart, C++ (Oboe Audio), SIP/VoIP, ESP32, React.js, Supabase, Local LLMs (Ollama).";
        break;
      case "projects":
        response = "1. Verbo/Troy VoIP Suite | 2. DDTransport Fleet App | 3. WiFi Radar Diagnostic | 4. Transaction Detector";
        break;
      case "contact":
        response = "Email: 111abhiabhi@gmail.com | Phone: +91 9497747142";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${command}'. Try: whoami, skills, projects, contact, clear`;
    }

    setTerminalLogs((prev) => [...prev, { cmd: command, res: response }]);
    setTerminalInput("");
  };

  const coreDomains = [
    {
      id: "flutter",
      title: "Flutter & Mobile Architecture",
      tag: "Flutter",
      desc: "Cross-platform iOS/Android apps with BLoC, Provider, and native C/C++ (Google Oboe audio engine) bindings.",
      icon: "fa-mobile-screen-button",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "iot",
      title: "IoT & Embedded Systems",
      tag: "ESP32",
      desc: "ESP32 microcontrollers, device provisioning routines, RG hardware tooling, and real-time audio simulation.",
      icon: "fa-microchip",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: "ai",
      title: "Local AI & Edge ML",
      tag: "Local AI",
      desc: "Integrating Ollama local LLMs, LiteRT, Gemini, and computer vision models for private on-device intelligence.",
      icon: "fa-brain",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      id: "fullstack",
      title: "Full-Stack & Cloud Services",
      tag: "React",
      desc: "React web dashboards, Supabase, Firebase backend architectures, Go microservices, and REST APIs.",
      icon: "fa-cloud-code",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  const techBadges = [
    "Flutter",
    "Dart",
    "ESP32",
    "VoIP / Oboe",
    "React",
    "Local AI",
    "Supabase",
    "Go",
    "REST APIs",
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        {/* Glowing Background Blur Balls */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Profile Picture with Glow Effect */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-lg opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Abhijith M P profile"
                className={`relative w-72 sm:w-80 md:w-96 h-auto rounded-2xl shadow-2xl object-cover border-4 ${
                  darkMode ? "border-gray-800" : "border-white"
                }`}
              />
              <div className="absolute -bottom-4 right-4 bg-emerald-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-emerald-400">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                Active Builder
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 backdrop-blur-md bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
              <i className="fa-solid fa-code text-cyan-400"></i>
              Senior Mobile, Systems & Edge AI Developer
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-serif leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent block sm:inline">
                ABHIJITH M P
              </span>
            </h1>

            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Engineering high-speed <strong className={darkMode ? "text-white" : "text-gray-900"}>Flutter mobile applications</strong>, <strong className={darkMode ? "text-white" : "text-gray-900"}>VoIP & native C++ audio engines (Google Oboe)</strong>, <strong className={darkMode ? "text-white" : "text-gray-900"}>ESP32 IoT hardware</strong>, and on-device <strong className={darkMode ? "text-white" : "text-gray-900"}>Local AI models</strong>.
            </p>

            {/* Interactive Tech Stack Pills */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Click a skill to filter domain areas:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techBadges.map((tech) => {
                  const isSelected = selectedTech === tech;
                  return (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(isSelected ? null : tech)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                        isSelected
                          ? "bg-cyan-600 text-white border-cyan-500 shadow-md scale-105"
                          : darkMode
                          ? "bg-gray-800/80 border-gray-700/80 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400"
                          : "bg-white border-gray-200 text-gray-700 hover:border-cyan-500/50 hover:text-cyan-600 shadow-sm"
                      }`}
                    >
                      {tech} {isSelected && "✕"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition duration-200 text-center flex items-center justify-center gap-2"
              >
                View Real Projects <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
              <Link
                to="/contactus"
                className={`px-6 py-3.5 font-semibold rounded-xl border transition duration-200 text-center ${
                  darkMode
                    ? "bg-gray-800/80 hover:bg-gray-700 border-gray-700 text-cyan-400"
                    : "bg-white hover:bg-gray-50 border-gray-200 text-cyan-700 shadow-sm"
                }`}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Developer CLI Terminal Component */}
      <section className="max-w-7xl mx-auto px-6 py-10 w-full">
        <div
          className={`rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
            darkMode ? "bg-[#0F172A] border-gray-800" : "bg-gray-900 border-gray-800 text-gray-100"
          }`}
        >
          {/* Terminal Window Header */}
          <div className="bg-gray-800/90 px-4 py-3 border-b border-gray-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono text-gray-400 ml-2">abhijith@macbook-air ~ %</span>
            </div>
            <div className="flex gap-2">
              {["whoami", "skills", "projects", "contact", "clear"].map((quickCmd) => (
                <button
                  key={quickCmd}
                  onClick={() => handleTerminalCmd(quickCmd)}
                  className="px-2 py-0.5 bg-gray-700/70 hover:bg-cyan-600 hover:text-white text-[11px] font-mono text-gray-300 rounded transition"
                >
                  {quickCmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs sm:text-sm space-y-3 max-h-60 overflow-y-auto text-emerald-400">
            {terminalLogs.map((log, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-gray-500">$</span>
                  <span>{log.cmd}</span>
                </div>
                <div className="text-gray-300 pl-4 border-l-2 border-cyan-500/40 leading-relaxed">
                  {log.res}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTerminalCmd();
              }}
              className="flex items-center gap-2 pt-2 text-cyan-400"
            >
              <span className="text-gray-500">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'whoami', 'skills', 'projects', or 'contact'..."
                className="bg-transparent border-none outline-none text-gray-200 flex-1 font-mono text-xs sm:text-sm placeholder-gray-600 focus:ring-0"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Engineering Focus Pillars */}
      <section className={`py-16 border-t transition-colors duration-300 ${darkMode ? "bg-[#0D1322] border-gray-800/80" : "bg-white border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-serif">Engineering Focus Areas</h2>
            <p className={`text-sm max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Hover or click on focus cards to see active technology integrations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDomains.map((domain) => {
              const isMatch = selectedTech ? domain.tag.toLowerCase().includes(selectedTech.toLowerCase()) || domain.title.toLowerCase().includes(selectedTech.toLowerCase()) : true;

              return (
                <div
                  key={domain.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 space-y-4 group relative ${
                    isMatch
                      ? darkMode
                        ? "bg-gray-800/60 border-gray-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/10"
                        : "bg-slate-50 border-gray-200/80 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/10"
                      : "opacity-40 grayscale"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${domain.gradient} flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 transition duration-300`}>
                    <i className={`fa-solid ${domain.icon}`}></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-semibold">
                      {domain.tag}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-2">{domain.title}</h3>
                  </div>
                  <p className={`text-xs leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{domain.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
