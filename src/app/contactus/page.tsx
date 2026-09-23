"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { KotlinIcon } from "../../components/TechIcons";

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    projectType: "Kotlin & Compose Native App",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const projectTypes: string[] = [
    "Kotlin & Compose Native App",
    "Flutter & Supabase Mobile App",
    "Next.js & Shopify Web Platform",
    "Google Oboe C++ Audio Engine",
    "ESP32 IoT & Firmware",
    "General Consultation",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Kotlin & Compose Native App",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen py-12 px-6 relative bg-grid-subtle">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[var(--accent)] text-[var(--accent-text)] px-5 py-3 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2">
          <i className="fa-solid fa-circle-check"></i> {toastMessage}
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--accent-subtle)] border border-[var(--border-active)] text-[var(--accent)] text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <KotlinIcon className="w-3.5 h-3.5" /> Start a Conversation
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">Let's Build Something Exceptional</h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[var(--text-secondary)]">
            Available for Android applications (<strong className="text-[var(--accent)] font-semibold">Kotlin & Compose</strong>), cross-platform mobile (<strong className="text-[var(--text-primary)] font-semibold">Flutter & Supabase</strong>), web platforms (<strong className="text-[var(--text-primary)] font-semibold">Next.js & Shopify</strong>), and low-latency audio engines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Direct Contact Cards */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-200 space-y-6 text-[var(--text-primary)] shadow-sm">
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Direct Contact</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                Click on any contact item below to instantly copy details to your clipboard.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Email Item */}
                <div
                  onClick={() => handleCopy("111abhiabhi@gmail.com", "Email")}
                  className="p-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] transition-all duration-150 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] text-[var(--accent)] flex items-center justify-center text-base font-bold border border-[var(--border-subtle)]">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-[var(--text-muted)]">Email Address</h5>
                      <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">111abhiabhi@gmail.com</p>
                    </div>
                  </div>
                  <i className="fa-regular fa-copy text-[var(--text-muted)] group-hover:text-[var(--accent)] text-sm"></i>
                </div>

                {/* Phone Item */}
                <div
                  onClick={() => handleCopy("+919497747142", "Phone number")}
                  className="p-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] transition-all duration-150 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] text-[var(--accent)] flex items-center justify-center text-base font-bold border border-[var(--border-subtle)]">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-[var(--text-muted)]">Phone Number</h5>
                      <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">+91 94977 47142</p>
                    </div>
                  </div>
                  <i className="fa-regular fa-copy text-[var(--text-muted)] group-hover:text-[var(--accent)] text-sm"></i>
                </div>

                {/* GitHub Item */}
                <a
                  href="https://github.com/Dev-Abhijithmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] transition-all duration-150 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] text-[var(--accent)] flex items-center justify-center text-base font-bold border border-[var(--border-subtle)]">
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-[var(--text-muted)]">GitHub Profile</h5>
                      <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">github.com/Dev-Abhijithmp</p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[var(--text-muted)] group-hover:text-[var(--accent)] text-xs"></i>
                </a>

                {/* Location Item */}
                <div className="p-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-surface)]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] text-[var(--accent)] flex items-center justify-center text-base font-bold border border-[var(--border-subtle)] mt-0.5">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-[10px] uppercase font-mono text-[var(--text-muted)]">Base Location</h5>
                      <p className="text-xs leading-relaxed mt-1 text-[var(--text-secondary)]">
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
          <div className="p-8 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-200 space-y-6 text-[var(--text-primary)] shadow-sm">
            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Send an Inquiry</h3>

            {submitted && (
              <div className="p-4 bg-[var(--accent-subtle)] border border-[var(--border-active)] text-[var(--accent)] rounded-2xl text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-base"></i> Thank you! Your message has been received. I will reply promptly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                  Project Domain
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all duration-150 ${
                        formData.projectType === type
                          ? "bg-[var(--accent)] text-[var(--accent-text)] font-bold shadow-sm scale-105"
                          : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--border-active)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Henderson"
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-xs border border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition duration-150 focus:border-[var(--border-active)]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-xs border border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition duration-150 focus:border-[var(--border-active)]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 / International phone"
                  className="w-full px-4 py-2.5 rounded-xl text-xs border border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition duration-150 focus:border-[var(--border-active)]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                  Message & Scope
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your Android (Kotlin / Compose) app, Flutter mobile solution, Next.js web portal, or audio engine requirements..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-xs border border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition duration-150 focus:border-[var(--border-active)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-text)] font-semibold rounded-2xl shadow-sm transition duration-150 text-xs flex items-center justify-center gap-2"
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
