import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { KotlinIcon } from "./components/TechIcons";

export default function Contactus() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Kotlin & Compose App",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const projectTypes = [
    "Kotlin & Compose App",
    "VoIP / Oboe Audio Engine",
    "Flutter Mobile App",
    "ESP32 IoT Hardware",
    "Edge AI / Local LLM",
    "General Consultation",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", projectType: "Kotlin & Compose App", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen py-12 px-6 relative">
      {/* Background radial glows */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-kotlin/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-96 left-1/4 w-80 h-80 bg-compose/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-kotlin to-compose text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 animate-bounce">
          <i className="fa-solid fa-circle-check"></i> {toastMessage}
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-kotlin/10 border border-kotlin/30 text-kotlin-light text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <KotlinIcon className="w-3.5 h-3.5" /> Start a Conversation
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading">Let's Build Something Exceptional</h2>
          <p className={`max-w-2xl mx-auto text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Available for high-impact Android applications (<strong className="text-kotlin-light">Kotlin & Jetpack Compose</strong>), low-latency C++ audio engines, IoT hardware, and Edge AI solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-kotlin to-compose mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Direct Contact Cards */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-3xl border transition-all duration-300 space-y-6 ${
                darkMode ? "bg-[#0D1424] border-white/10 text-gray-200" : "bg-white border-gray-200 text-gray-800 shadow-sm"
              }`}
            >
              <h3 className="text-2xl font-bold font-heading text-kotlin-light">Direct Contact</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Click on any contact item below to instantly copy details to your clipboard.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Email Item */}
                <div
                  onClick={() => handleCopy("111abhiabhi@gmail.com", "Email")}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    darkMode ? "bg-white/5 border-white/10 hover:border-kotlin" : "bg-slate-50 border-gray-200 hover:border-kotlin"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-kotlin/10 text-kotlin-light flex items-center justify-center text-lg font-bold border border-kotlin/20">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-gray-400">Email Address</h5>
                      <p className="text-xs sm:text-sm font-semibold text-kotlin-light group-hover:underline">111abhiabhi@gmail.com</p>
                    </div>
                  </div>
                  <i className="fa-regular fa-copy text-gray-400 group-hover:text-kotlin-light text-sm"></i>
                </div>

                {/* Phone Item */}
                <div
                  onClick={() => handleCopy("+919497747142", "Phone number")}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    darkMode ? "bg-white/5 border-white/10 hover:border-compose" : "bg-slate-50 border-gray-200 hover:border-compose"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-compose/10 text-compose flex items-center justify-center text-lg font-bold border border-compose/20">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-gray-400">Phone Number</h5>
                      <p className="text-xs sm:text-sm font-semibold text-compose group-hover:underline">+91 94977 47142</p>
                    </div>
                  </div>
                  <i className="fa-regular fa-copy text-gray-400 group-hover:text-compose text-sm"></i>
                </div>

                {/* GitHub Item */}
                <a
                  href="https://github.com/Dev-Abhijithmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    darkMode ? "bg-white/5 border-white/10 hover:border-white/30" : "bg-slate-50 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center text-lg font-bold border border-white/10">
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-gray-400">GitHub Profile</h5>
                      <p className="text-xs sm:text-sm font-semibold group-hover:underline">github.com/Dev-Abhijithmp</p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 group-hover:text-white text-xs"></i>
                </a>

                {/* Location Item */}
                <div
                  className={`p-4 rounded-2xl border ${
                    darkMode ? "bg-white/5 border-white/10" : "bg-slate-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-bold border border-cyan-500/20 mt-0.5">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-gray-400">Base Location</h5>
                      <p className={`text-xs leading-relaxed mt-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Mukkuttathil Parambil House, Valluvally<br />
                        Koonammavu P.O., Ernakulam<br />
                        Kerala - 683518, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div
            className={`p-8 rounded-3xl border transition-all duration-300 space-y-6 ${
              darkMode ? "bg-[#0D1424] border-white/10 text-gray-200" : "bg-white border-gray-200 text-gray-800 shadow-sm"
            }`}
          >
            <h3 className="text-2xl font-bold font-heading text-kotlin-light">Send a Project Inquiry</h3>

            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-base"></i> Thank you! Your message has been received. I will reply promptly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Project Domain
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all duration-200 ${
                        formData.projectType === type
                          ? "bg-gradient-to-r from-kotlin to-compose text-white shadow-md shadow-kotlin/20 scale-105"
                          : darkMode
                          ? "bg-white/5 text-gray-300 border border-white/10 hover:border-white/20"
                          : "bg-slate-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Henderson"
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-500 focus:border-kotlin"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-kotlin shadow-sm"
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-500 focus:border-kotlin"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-kotlin shadow-sm"
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 / International phone"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-500 focus:border-kotlin"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-kotlin shadow-sm"
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Message & Requirements
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your Android (Kotlin / Compose) app, C++ audio streaming, or hardware requirements..."
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-500 focus:border-kotlin"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-kotlin shadow-sm"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-kotlin via-kotlin-pink to-compose hover:opacity-95 text-white font-bold rounded-2xl shadow-xl hover:shadow-kotlin/25 transition duration-200 text-xs flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
