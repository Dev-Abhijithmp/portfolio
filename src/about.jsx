import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { KotlinIcon, ComposeIcon, AndroidIcon, FlutterIcon } from "./components/TechIcons";

export default function About() {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    {
      category: "Kotlin & Android Native",
      title: "Modern Android, Kotlin & Jetpack Compose",
      icon: "compose",
      skills: [
        {
          name: "Kotlin 2.0+ & Coroutines",
          level: "96%",
          desc: "Idiomatic Kotlin, Structured Concurrency, StateFlow, SharedFlow & Flow transforms",
          badge: "Kotlin Core",
        },
        {
          name: "Jetpack Compose & Material 3",
          level: "95%",
          desc: "Declarative layouts, custom Modifiers, Canvas animations & Recomposition tuning",
          badge: "Compose UI",
        },
        {
          name: "Android Jetpack Architecture",
          level: "92%",
          desc: "Clean Architecture, MVI / MVVM, Hilt & Koin DI, Room DB, WorkManager",
          badge: "Architecture",
        },
        {
          name: "Compose Multiplatform (KMP)",
          level: "88%",
          desc: "Code sharing between Android and Desktop / iOS with Kotlin Multiplatform",
          badge: "KMP Multiplatform",
        },
      ],
    },
    {
      category: "Audio & Systems",
      title: "Audio Engineering & Android NDK",
      icon: "audio",
      skills: [
        {
          name: "Android C/C++ Audio (Google Oboe)",
          level: "90%",
          desc: "Native JNI audio streams, sub-20ms low latency hardware buffers, OpenSL ES fallback",
          badge: "NDK / C++",
        },
        {
          name: "SIP & VoIP Protocols",
          level: "86%",
          desc: "Real-time call signaling, audio codecs (Opus, PCMU), jitter buffers, and stream sync",
          badge: "VoIP Engine",
        },
        {
          name: "Android Hardware & Wi-Fi APIs",
          level: "88%",
          desc: "WifiManager scan routines, RSSI signal diagnostics, and BLE GATT clients",
          badge: "Hardware APIs",
        },
      ],
    },
    {
      category: "Cross-Platform & Web",
      title: "Flutter, Next.js & Cloud Services",
      icon: "flutter",
      skills: [
        {
          name: "Flutter & Dart",
          level: "94%",
          desc: "Production mobile apps (DDTransport, Expense Tracker, WiFi Radar) with BLoC, Provider, and MethodChannels",
          badge: "Flutter",
        },
        {
          name: "Next.js & React (Shopify Headless)",
          level: "90%",
          desc: "Next.js App Router, SSR/ISR, Verbo web portal, and headless Shopify Storefront GraphQL integrations",
          badge: "Next.js & Web",
        },
        {
          name: "Supabase & PostgreSQL Backend",
          level: "91%",
          desc: "Realtime databases, Row Level Security (RLS), Auth, fleet telemetry sync, and edge storage",
          badge: "Supabase / BaaS",
        },
      ],
    },
    {
      category: "IoT & Edge AI",
      title: "Embedded Systems & On-Device ML",
      icon: "iot",
      skills: [
        {
          name: "ESP32 Firmware & Provisioning",
          level: "84%",
          desc: "BLE/Wi-Fi provisioning protocols, sensor telemetry, and hardware download tools",
          badge: "ESP32",
        },
        {
          name: "Local LLMs (Ollama, LiteRT)",
          level: "86%",
          desc: "On-device quantized AI execution, zero-cloud API dependency, private data inference",
          badge: "Local AI",
        },
        {
          name: "MLKit & Computer Vision",
          level: "85%",
          desc: "On-device OCR receipt analyzer, barcode scanner, and text extraction pipelines",
          badge: "Edge ML",
        },
      ],
    },
  ];

  const timelineEvents = [
    {
      year: "Present",
      role: "Lead Android & Systems Engineer",
      desc: "Architecting the Verbo VoIP communication suite with Kotlin & Jetpack Compose, the Verbo Next.js web portal, low-latency Google Oboe C++ audio engines, and BLE provisioning to ESP32 microcontrollers.",
      tech: ["Kotlin", "Jetpack Compose", "Next.js", "Oboe C++", "ESP32", "Supabase"],
    },
    {
      year: "2023 - 2024",
      role: "Senior Mobile & Web Developer",
      desc: "Developed the DDTransport fleet logistics platform with Flutter & Supabase real-time backend, the on-device OCR expense tracker in Flutter, and the Japamala headless Next.js Shopify e-commerce platform.",
      tech: ["Flutter", "Supabase", "Next.js", "Shopify API", "MLKit OCR", "Dart"],
    },
    {
      year: "2022",
      role: "Full-Stack Web & Mobile Developer",
      desc: "Constructed web dashboard platforms with React and Tailwind CSS, implemented microservice APIs, and published utility applications.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "SQLite"],
    },
  ];

  const filteredCategories = skillCategories.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-12 px-6 relative">
      {/* Background radial glows */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-kotlin/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-96 left-1/4 w-80 h-80 bg-compose/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-kotlin/10 border border-kotlin/30 text-kotlin-light text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <KotlinIcon className="w-3.5 h-3.5" /> Engineer Profile & Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading">About & Technical Expertise</h2>
          <p className={`max-w-2xl mx-auto text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Specializing in modern Android with Kotlin & Jetpack Compose, low-latency C++ audio engines, embedded ESP32 hardware, and on-device Edge AI.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-kotlin to-compose mx-auto rounded-full"></div>
        </div>

        {/* Bio Highlights Card */}
        <div
          className={`p-8 rounded-3xl border transition-all duration-300 space-y-5 ${
            darkMode ? "bg-[#0D1424]/90 border-white/10 text-gray-200" : "bg-white border-gray-200 text-gray-800 shadow-sm"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-white/10">
            <h3 className="text-2xl font-bold font-heading text-kotlin-light flex items-center gap-2.5">
              <AndroidIcon className="w-6 h-6 text-compose" />
              <span>Abhijith M P — Systems & Android Specialist</span>
            </h3>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-compose/10 text-compose border border-compose/20 self-start sm:self-auto">
              Ernakulam, Kerala, India
            </span>
          </div>

          <p className="leading-relaxed text-xs sm:text-sm">
            I am a mobile and systems engineer driven by creating high-performance, robust software architectures. My primary specialty centers on <strong className="text-kotlin-light font-bold">Modern Android Development</strong> using <strong className="text-compose font-bold">Kotlin & Jetpack Compose</strong>, adhering to clean MVI/MVVM design principles and non-blocking Coroutines/Flow pipelines.
          </p>

          <p className="leading-relaxed text-xs sm:text-sm">
            Beyond standard UI engineering, I specialize in low-level Android audio pipelines using <strong className="text-cyan-400 font-bold">Google Oboe C++ NDK</strong> for sub-20ms audio buffer latency, real-time <strong className={darkMode ? "text-white" : "text-gray-900"}>SIP/VoIP protocols</strong>, wireless RF scanning, embedded <strong className={darkMode ? "text-white" : "text-gray-900"}>ESP32 IoT firmware</strong>, and on-device privacy-first <strong className={darkMode ? "text-white" : "text-gray-900"}>Local LLMs (Ollama)</strong>.
          </p>

          {/* Quick Technical Badges */}
          <div className="pt-2 flex flex-wrap gap-2">
            {[
              "Kotlin 2.0+",
              "Jetpack Compose",
              "Coroutines StateFlow",
              "Compose Multiplatform (KMP)",
              "Google Oboe C++",
              "Android NDK / JNI",
              "Flutter",
              "ESP32 IoT",
              "Ollama Local AI",
            ].map((badge) => (
              <span
                key={badge}
                className={`text-[11px] font-mono px-3 py-1 rounded-xl border ${
                  badge.includes("Kotlin") || badge.includes("Compose")
                    ? "bg-kotlin/10 border-kotlin/30 text-kotlin-light font-semibold"
                    : darkMode
                    ? "bg-white/5 border-white/10 text-gray-300"
                    : "bg-gray-100 border-gray-200 text-gray-700"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Skill Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-bold font-heading">Engineering Skill Matrix</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Kotlin & Android Native", "Audio & Systems", "Cross-Platform & Web", "IoT & Edge AI"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-kotlin to-compose text-white shadow-md shadow-kotlin/20"
                      : darkMode
                      ? "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCategories.map((catGroup) => (
              <div
                key={catGroup.title}
                className={`p-6 rounded-3xl border transition-all duration-300 space-y-5 ${
                  darkMode ? "bg-[#0D1424] border-white/10" : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="border-b pb-3.5 flex items-center justify-between border-white/10">
                  <div className="flex items-center gap-2.5">
                    {catGroup.icon === "compose" ? (
                      <ComposeIcon className="w-5 h-5 text-compose" />
                    ) : catGroup.icon === "flutter" ? (
                      <FlutterIcon className="w-5 h-5 text-sky-400" />
                    ) : (
                      <i className={`fa-solid ${catGroup.icon === "audio" ? "fa-wave-square text-cyan-400" : "fa-microchip text-emerald-400"} text-lg`}></i>
                    )}
                    <h4 className="font-bold text-sm sm:text-base">{catGroup.title}</h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-kotlin/10 text-kotlin-light px-2.5 py-0.5 rounded-md font-bold border border-kotlin/20">
                    {catGroup.category}
                  </span>
                </div>

                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="font-bold flex items-center gap-1.5">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                            {skill.badge}
                          </span>
                          <span className="text-kotlin-light font-mono font-extrabold">{skill.level}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className={`w-full rounded-full h-2 ${darkMode ? "bg-white/5" : "bg-gray-100"}`}>
                        <div
                          className="bg-gradient-to-r from-kotlin via-kotlin-pink to-compose h-2 rounded-full transition-all duration-700"
                          style={{ width: skill.level }}
                        ></div>
                      </div>

                      <p className={`text-[11px] leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Evolution Timeline */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-bold font-heading">Engineering Evolution</h3>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Key milestones across Native Android, Audio Systems, and Hardware tooling.
            </p>
          </div>

          <div className="relative border-l-2 border-kotlin/30 pl-6 ml-4 sm:ml-8 space-y-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-kotlin to-compose border-4 border-slate-950 group-hover:scale-125 transition-transform duration-300"></div>

                <div
                  className={`p-6 rounded-3xl border transition-all duration-300 space-y-3 ${
                    darkMode
                      ? "bg-[#0D1424] border-white/10 hover:border-kotlin/40"
                      : "bg-white border-gray-200 shadow-sm hover:border-kotlin/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-mono font-bold text-kotlin-light bg-kotlin/10 px-2.5 py-0.5 rounded-md inline-block w-max border border-kotlin/20">
                      {evt.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-heading">{evt.role}</h4>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {evt.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evt.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-lg border ${
                          t.includes("Kotlin") || t.includes("Compose")
                            ? "bg-kotlin/10 border-kotlin/30 text-kotlin-light font-bold"
                            : darkMode
                            ? "bg-white/5 border-white/10 text-gray-300"
                            : "bg-slate-100 border-gray-200 text-gray-700"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
