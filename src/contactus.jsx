import { useState } from "react";
import { useTheme } from "./ThemeContext";

export default function Contactus() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Mobile App",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const projectTypes = ["Mobile App", "VoIP / Audio Engine", "ESP32 IoT", "Edge AI Solution", "Other Inquiry"];

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
      setFormData({ name: "", email: "", phone: "", projectType: "Mobile App", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen py-12 px-6 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyan-600 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2 animate-bounce">
          <i className="fa-solid fa-circle-check"></i> {toastMessage}
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider">
            <i className="fa-solid fa-paper-plane"></i> Get In Touch
          </div>
          <h2 className="text-4xl font-extrabold font-serif">Let's Build Together</h2>
          <p className={`max-w-2xl mx-auto text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Available for high-impact mobile development, VoIP audio integrations, ESP32 IoT projects, and Edge AI solutions.
          </p>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Direct Contact Cards */}
          <div className="space-y-6">
            <div
              className={`p-8 rounded-3xl border transition-all duration-300 space-y-6 ${
                darkMode ? "bg-[#0F172A]/90 border-gray-800 text-gray-200" : "bg-white border-gray-200 text-gray-800 shadow-sm"
              }`}
            >
              <h3 className="text-2xl font-bold font-serif text-cyan-400">Direct Contact</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Click on email or phone below to instantly copy details to your clipboard.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div
                  onClick={() => handleCopy("111abhiabhi@gmail.com", "Email")}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    darkMode ? "bg-gray-800/50 border-gray-700 hover:border-cyan-500" : "bg-slate-50 border-gray-200 hover:border-cyan-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-bold border border-cyan-500/20">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase text-gray-400">Email Address</h5>
                      <p className="text-sm font-semibold text-cyan-400 group-hover:underline">111abhiabhi@gmail.com</p>
                    </div>
                  </div>
                  <i className="fa-regular fa-copy text-gray-400 group-hover:text-cyan-400 text-sm"></i>
                </div>

                {/* Phone Item */}
                <div
                  onClick={() => handleCopy("+919497747142", "Phone number")}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    darkMode ? "bg-gray-800/50 border-gray-700 hover:border-cyan-500" : "bg-slate-50 border-gray-200 hover:border-cyan-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-bold border border-cyan-500/20">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase text-gray-400">Phone Number</h5>
                      <p className="text-sm font-semibold text-cyan-400 group-hover:underline">+91 94977 47142</p>
                    </div>
                  </div>
                  <i className="fa-regular fa-copy text-gray-400 group-hover:text-cyan-400 text-sm"></i>
                </div>

                {/* Location Item */}
                <div
                  className={`p-4 rounded-2xl border ${
                    darkMode ? "bg-gray-800/50 border-gray-700" : "bg-slate-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-bold border border-cyan-500/20 mt-0.5">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase text-gray-400">Base Location</h5>
                      <p className={`text-xs sm:text-sm leading-relaxed mt-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
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
              darkMode ? "bg-[#0F172A]/90 border-gray-800 text-gray-200" : "bg-white border-gray-200 text-gray-800 shadow-sm"
            }`}
          >
            <h3 className="text-2xl font-bold font-serif text-cyan-400">Send a Message</h3>

            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-base"></i> Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1 rounded-xl text-[11px] font-semibold transition-all duration-200 ${
                        formData.projectType === type
                          ? "bg-cyan-600 text-white shadow-md"
                          : darkMode
                          ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600"
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
                  placeholder="John Doe"
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:border-cyan-500"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-600 shadow-sm"
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
                  placeholder="your.email@example.com"
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:border-cyan-500"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-600 shadow-sm"
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
                  placeholder="+91 Phone Number"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:border-cyan-500"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-600 shadow-sm"
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Message Details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your app concept, hardware requirement, or inquiry..."
                  required
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none transition duration-200 ${
                    darkMode
                      ? "bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:border-cyan-500"
                      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-600 shadow-sm"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition duration-200 text-xs flex items-center justify-center gap-2"
              >
                Send Message <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
