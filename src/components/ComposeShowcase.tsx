"use client";

import React, { useState } from "react";
import { KotlinIcon, ComposeIcon } from "./TechIcons";

type TabType = "preview" | "composeCode" | "kotlinEngine";
type LatencyPresetType = "oboe-low" | "safe";

export default function ComposeShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [isAudioStreaming, setIsAudioStreaming] = useState<boolean>(true);
  const [latencyPreset, setLatencyPreset] = useState<LatencyPresetType>("oboe-low");
  const [volumeLevel, setVolumeLevel] = useState<number>(82);
  const [copied, setCopied] = useState<boolean>(false);

  const composeCode = `@Composable
fun AudioBufferVisualizer(
    isStreaming: Boolean,
    latencyMs: Int,
    volume: Float,
    onToggleStream: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .border(1.dp, MaterialTheme.colorScheme.outlineVariant, RoundedCornerShape(20.dp)),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            // Live status header
            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = "Oboe Native Stream",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )
                Badge(
                    containerColor = if (isStreaming) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surfaceVariant,
                    contentColor = if (isStreaming) MaterialTheme.colorScheme.onPrimaryContainer else MaterialTheme.colorScheme.onSurfaceVariant
                ) {
                    Text(text = if (isStreaming) "\${latencyMs}ms LATENCY" else "PAUSED")
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Real-time audio waveform canvas
            WaveformCanvas(
                isActive = isStreaming,
                amplitude = volume,
                modifier = Modifier.fillMaxWidth().height(48.dp)
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Action Control
            Button(
                onClick = onToggleStream,
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.primary
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(if (isStreaming) "Stop Audio Engine" else "Launch Oboe Engine")
            }
        }
    }
}`;

  const kotlinEngineCode = `class NativeAudioEngine @Inject constructor(
    @IoDispatcher private val ioDispatcher: CoroutineDispatcher
) {
    // Kotlin StateFlow for reactive compose observation
    private val _streamState = MutableStateFlow<StreamStatus>(StreamStatus.Idle)
    val streamState: StateFlow<StreamStatus> = _streamState.asStateFlow()

    // Android NDK / JNI C++ Oboe Audio Interface
    external fun initOboeStream(sampleRate: Int, bufferSize: Int): Long
    external fun pauseOboeStream(handle: Long)
    external fun getRealtimeLatencyMs(handle: Long): Float

    companion object {
        init {
            System.loadLibrary("oboe_audio_engine")
        }
    }

    suspend fun startStreaming(preset: LatencyPreset) = withContext(ioDispatcher) {
        val buffer = if (preset == LatencyPreset.LOW) 128 else 512
        val handle = initOboeStream(sampleRate = 48000, bufferSize = buffer)
        _streamState.value = StreamStatus.Active(
            handle = handle,
            latency = getRealtimeLatencyMs(handle)
        )
    }
}`;

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-200 overflow-hidden shadow-xl">
      {/* Component Header / Tabs */}
      <div className="px-5 py-3.5 border-b border-[var(--border-medium)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="h-4 w-px bg-[var(--border-medium)]"></div>
          <div className="flex items-center gap-2">
            <ComposeIcon className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-xs font-mono font-bold text-[var(--text-secondary)]">
              Jetpack Compose & Kotlin Inspector
            </span>
          </div>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-[var(--bg-card)] p-1 rounded-xl border border-[var(--border-medium)] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "preview"
                ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-sm font-bold"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <i className="fa-solid fa-mobile-screen mr-1 text-[10px]"></i> Live Preview
          </button>
          <button
            onClick={() => setActiveTab("composeCode")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "composeCode"
                ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-sm font-bold"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <i className="fa-solid fa-code mr-1 text-[10px]"></i> UI @Composable
          </button>
          <button
            onClick={() => setActiveTab("kotlinEngine")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "kotlinEngine"
                ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-sm font-bold"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <i className="fa-solid fa-bolt mr-1 text-[10px]"></i> Engine (NDK)
          </button>
        </div>
      </div>

      {/* Tab 1: Live Interactive Compose Card Simulator */}
      {activeTab === "preview" && (
        <div className="p-6 md:p-8 grid md:grid-cols-12 gap-8 items-center">
          {/* Simulated Mobile Frame */}
          <div className="md:col-span-7 flex justify-center">
            <div className="w-full max-w-sm rounded-[32px] p-4 border border-[var(--border-medium)] bg-[var(--bg-surface)] shadow-2xl relative">
              {/* Phone Camera Notch & Status Bar */}
              <div className="flex justify-between items-center px-4 pt-1 pb-3 text-[10px] text-[var(--text-muted)] font-mono">
                <span>09:41</span>
                <div className="w-16 h-3 bg-black/40 rounded-full mx-auto"></div>
                <div className="flex items-center gap-1.5 text-[var(--accent)]">
                  <i className="fa-solid fa-wifi text-[9px]"></i>
                  <i className="fa-solid fa-battery-full text-[10px]"></i>
                </div>
              </div>

              {/* Compose Simulated Material 3 Surface */}
              <div className="bg-[var(--bg-card)] rounded-2xl p-5 border border-[var(--border-medium)] space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] border border-[var(--border-active)] flex items-center justify-center text-[var(--accent)] text-xs font-bold">
                      <ComposeIcon className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)] tracking-wide">SoundPulse Oboe Stream</h4>
                      <p className="text-[10px] text-[var(--text-muted)] font-mono">Kotlin StateFlow • Active</p>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 border ${
                      isAudioStreaming
                        ? "bg-[var(--accent-subtle)] border-[var(--border-active)] text-[var(--accent)]"
                        : "bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isAudioStreaming ? "bg-[var(--accent)] animate-pulse" : "bg-gray-500"
                      }`}
                    ></span>
                    {isAudioStreaming ? (latencyPreset === "oboe-low" ? "12ms LATENCY" : "48ms LATENCY") : "PAUSED"}
                  </span>
                </div>

                {/* Animated Real-time Audio Waveform */}
                <div className="bg-[var(--bg-surface)] rounded-xl p-3 border border-[var(--border-subtle)] space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
                    <span>Oboe C++ Buffer: {latencyPreset === "oboe-low" ? "128 frames" : "512 frames"}</span>
                    <span className="text-[var(--accent)]">48.0 kHz / 24-bit PCM</span>
                  </div>

                  {/* Equalizer Frequency Bars */}
                  <div className="h-14 flex items-end justify-between gap-1 px-1">
                    {[18, 42, 28, 64, 38, 76, 52, 90, 68, 85, 45, 70, 32, 58, 24, 40].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t transition-all duration-300 ${
                          isAudioStreaming
                            ? "bg-[var(--accent)]"
                            : "bg-[var(--border-medium)] opacity-40"
                        }`}
                        style={{
                          height: isAudioStreaming ? `${Math.max(8, (h * volumeLevel) / 100)}%` : "12%",
                          animationDuration: `${0.6 + (i % 5) * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Live Controls */}
                <div className="space-y-3 pt-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[var(--text-secondary)] font-medium">Engine Buffer Mode:</span>
                    <div className="flex gap-1 bg-[var(--bg-surface)] p-0.5 rounded-lg border border-[var(--border-subtle)]">
                      <button
                        onClick={() => setLatencyPreset("oboe-low")}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                          latencyPreset === "oboe-low"
                            ? "bg-[var(--accent)] text-[var(--accent-text)] font-bold"
                            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        Oboe Low (12ms)
                      </button>
                      <button
                        onClick={() => setLatencyPreset("safe")}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                          latencyPreset === "safe"
                            ? "bg-[var(--accent)] text-[var(--accent-text)] font-bold"
                            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        Safe (48ms)
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[var(--text-muted)] mb-1">
                      <span>Stream Gain</span>
                      <span className="font-mono text-[var(--accent)]">{volumeLevel}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={volumeLevel}
                      onChange={(e) => setVolumeLevel(Number(e.target.value))}
                      className="w-full accent-[var(--accent)] h-1.5 bg-[var(--bg-surface)] rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Primary Jetpack Compose Button */}
                  <button
                    onClick={() => setIsAudioStreaming(!isAudioStreaming)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition duration-150 flex items-center justify-center gap-2 ${
                      isAudioStreaming
                        ? "bg-[var(--bg-surface)] border border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        : "bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] shadow-sm"
                    }`}
                  >
                    <i className={`fa-solid ${isAudioStreaming ? "fa-pause" : "fa-play"} text-[10px]`}></i>
                    {isAudioStreaming ? "Pause Kotlin Audio Stream" : "Resume Jetpack Compose Stream"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Narrative */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-active)]">
              <ComposeIcon className="w-3.5 h-3.5 text-[var(--accent)]" /> Modern Android & Jetpack Compose
            </div>

            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Declarative UI Meets Native C++ Audio
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
              Modern Android development powered by <strong className="text-[var(--accent)] font-semibold">Kotlin Coroutines</strong> and <strong className="text-[var(--accent)] font-semibold">Jetpack Compose</strong>. Reactive StateFlow streams update the UI smoothly at 60–120 FPS while delegating low-latency audio processing directly to native C++ (<span className="text-[var(--accent)] font-mono font-semibold">Google Oboe</span>) via JNI.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { title: "Jetpack Compose Declarative UI", desc: "Pure Kotlin declarative layouts with Material 3." },
                { title: "Google Oboe Audio Engine (NDK)", desc: "Sub-20ms low-latency hardware audio buffer rendering via JNI." },
                { title: "Next.js Web Portal Integration", desc: "Synchronized with a Next.js web portal for fleet management & telemetry." },
                { title: "ESP32 BLE Provisioning", desc: "Direct Bluetooth Low Energy hardware device pairing & configuration." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-active)] text-[var(--accent)] flex items-center justify-center text-[10px] mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[var(--text-primary)]">{item.title}</h5>
                    <p className="text-[11px] text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Compose Code Snippet */}
      {activeTab === "composeCode" && (
        <div className="p-5 sm:p-6 bg-[var(--bg-surface)] font-mono text-xs overflow-x-auto relative">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-[var(--border-medium)]">
            <span className="text-[var(--text-muted)] text-[11px] flex items-center gap-1.5">
              <ComposeIcon className="w-3.5 h-3.5 text-[var(--accent)]" /> app/src/main/java/.../ui/AudioBufferVisualizer.kt
            </span>
            <button
              onClick={() => handleCopyCode(composeCode)}
              className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--border-active)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg text-[11px] font-sans flex items-center gap-1.5 transition"
            >
              <i className={`fa-regular ${copied ? "fa-circle-check text-emerald-400" : "fa-copy"}`}></i>
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <pre className="text-[var(--text-secondary)] leading-relaxed">
            <code>
              {composeCode}
            </code>
          </pre>
        </div>
      )}

      {/* Tab 3: Kotlin Engine & Coroutines Code Snippet */}
      {activeTab === "kotlinEngine" && (
        <div className="p-5 sm:p-6 bg-[var(--bg-surface)] font-mono text-xs overflow-x-auto relative">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-[var(--border-medium)]">
            <span className="text-[var(--text-muted)] text-[11px] flex items-center gap-1.5">
              <KotlinIcon className="w-3.5 h-3.5 text-[var(--accent)]" /> app/src/main/java/.../engine/NativeAudioEngine.kt
            </span>
            <button
              onClick={() => handleCopyCode(kotlinEngineCode)}
              className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-medium)] hover:border-[var(--border-active)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg text-[11px] font-sans flex items-center gap-1.5 transition"
            >
              <i className={`fa-regular ${copied ? "fa-circle-check text-emerald-400" : "fa-copy"}`}></i>
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <pre className="text-[var(--text-secondary)] leading-relaxed">
            <code>
              {kotlinEngineCode}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
