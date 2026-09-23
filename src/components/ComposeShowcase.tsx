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
    <div className="rounded-3xl bg-[var(--bg-card)] transition-all duration-200 overflow-hidden shadow-2xl">
      {/* Component Header / Tabs */}
      <div className="px-5 py-3.5 bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></span>
          </div>
          <div className="h-4 w-px bg-[var(--bg-card)]"></div>
          <div className="flex items-center gap-2">
            <ComposeIcon className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
              Jetpack Compose & Kotlin Inspector
            </span>
          </div>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "preview"
                ? "bg-[var(--accent-primary)] text-[var(--accent-primary-text)] shadow-sm font-bold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <i className="fa-solid fa-mobile-screen mr-1 text-[10px]"></i> Live Preview
          </button>
          <button
            onClick={() => setActiveTab("composeCode")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "composeCode"
                ? "bg-[var(--accent-secondary)] text-[var(--accent-primary)] border border-[var(--accent-secondary-border)] shadow-sm font-bold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <i className="fa-solid fa-code mr-1 text-[10px]"></i> UI @Composable
          </button>
          <button
            onClick={() => setActiveTab("kotlinEngine")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "kotlinEngine"
                ? "bg-[var(--accent-primary)] text-[var(--accent-primary-text)] shadow-sm font-bold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
            <div className="w-full max-w-sm rounded-[32px] p-4 bg-[var(--bg-surface)] shadow-2xl relative">
              {/* Phone Camera Notch & Status Bar */}
              <div className="flex justify-between items-center px-4 pt-1 pb-3 text-[10px] text-[var(--accent-secondary-bright)] font-mono font-semibold">
                <span>09:41</span>
                <div className="w-16 h-3 bg-black/50 rounded-full mx-auto"></div>
                <div className="flex items-center gap-1.5 text-[var(--accent-primary)]">
                  <i className="fa-solid fa-wifi text-[9px]"></i>
                  <i className="fa-solid fa-battery-full text-[10px]"></i>
                </div>
              </div>

              {/* Compose Simulated Material 3 Surface */}
              <div className="bg-[var(--bg-card)] rounded-2xl p-5 space-y-4 shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-subtle)] border border-[var(--accent-primary-border)] flex items-center justify-center text-[var(--accent-primary)] text-xs font-bold">
                      <ComposeIcon className="w-4 h-4 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)] tracking-wide">SoundPulse Oboe Stream</h4>
                      <p className="text-[10px] text-[var(--accent-secondary-bright)] font-mono font-semibold">Kotlin StateFlow • Active</p>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 border ${
                      isAudioStreaming
                        ? "bg-[var(--accent-primary-subtle)] border-[var(--accent-primary-border)] text-[var(--accent-primary)]"
                        : "bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isAudioStreaming ? "bg-[var(--accent-primary)] animate-pulse" : "bg-gray-500"
                      }`}
                    ></span>
                    {isAudioStreaming ? (latencyPreset === "oboe-low" ? "12ms LATENCY" : "48ms LATENCY") : "PAUSED"}
                  </span>
                </div>

                {/* Animated Real-time Audio Waveform featuring both palette colors */}
                <div className="bg-[var(--bg-surface)] rounded-xl p-3 border border-[var(--border-subtle)] space-y-2">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-[var(--text-secondary)]">Oboe Buffer: {latencyPreset === "oboe-low" ? "128 frames" : "512 frames"}</span>
                    <span className="text-[var(--accent-secondary-bright)] font-bold">48.0 kHz / 24-bit PCM</span>
                  </div>

                  {/* Equalizer Frequency Bars alternating between colors */}
                  <div className="h-14 flex items-end justify-between gap-1 px-1">
                    {[18, 42, 28, 64, 38, 76, 52, 90, 68, 85, 45, 70, 32, 58, 24, 40].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t transition-all duration-300 ${
                          isAudioStreaming
                            ? i % 2 === 0
                              ? "bg-[var(--accent-primary)]"
                              : "bg-[var(--accent-secondary-bright)]"
                            : "bg-[var(--border-medium)] opacity-30"
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
                        className={`px-2.5 py-1 rounded text-[10px] font-semibold transition ${
                          latencyPreset === "oboe-low"
                            ? "bg-[var(--accent-primary)] text-[var(--accent-primary-text)] font-bold shadow-sm"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        Oboe Low (12ms)
                      </button>
                      <button
                        onClick={() => setLatencyPreset("safe")}
                        className={`px-2.5 py-1 rounded text-[10px] font-semibold transition ${
                          latencyPreset === "safe"
                            ? "bg-[var(--accent-secondary)] text-[var(--accent-primary)] border border-[var(--accent-secondary-border)] font-bold shadow-sm"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        Safe (48ms)
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[var(--text-muted)] mb-1">
                      <span>Stream Gain</span>
                      <span className="font-mono font-bold text-[var(--accent-primary)]">{volumeLevel}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={volumeLevel}
                      onChange={(e) => setVolumeLevel(Number(e.target.value))}
                      className="w-full accent-[var(--accent-primary)] h-1.5 bg-[var(--bg-surface)] rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Primary Jetpack Compose Button */}
                  <button
                    onClick={() => setIsAudioStreaming(!isAudioStreaming)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition duration-150 flex items-center justify-center gap-2 ${
                      isAudioStreaming
                        ? "bg-[var(--accent-secondary)] border border-[var(--accent-secondary-border)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] shadow-sm"
                        : "bg-[var(--accent-primary)] text-[var(--accent-primary-text)] hover:bg-[var(--accent-primary-hover)] shadow-lg"
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border border-[var(--accent-secondary-border)]">
              <ComposeIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Modern Android & Jetpack Compose
            </div>

            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
              Declarative UI Meets Native C++ Audio
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
              Modern Android development powered by <strong className="text-[var(--accent-primary)] font-semibold">Kotlin Coroutines</strong> and <strong className="text-[var(--accent-secondary-bright)] font-semibold">Jetpack Compose</strong>. Reactive StateFlow streams update the UI smoothly at 60–120 FPS while delegating low-latency audio processing directly to native C++ (<span className="text-[var(--accent-primary)] font-mono font-bold">Google Oboe</span>) via JNI.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { title: "Jetpack Compose Declarative UI", desc: "Pure Kotlin declarative layouts with Material 3." },
                { title: "Google Oboe Audio Engine (NDK)", desc: "Sub-20ms low-latency hardware audio buffer rendering via JNI." },
                { title: "Next.js Web Portal Integration", desc: "Synchronized with a Next.js web portal for fleet management & telemetry." },
                { title: "ESP32 BLE Provisioning", desc: "Direct Bluetooth Low Energy hardware device pairing & configuration." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-secondary)] border border-[var(--accent-secondary-border)] text-[var(--accent-primary)] flex items-center justify-center text-[10px] mt-0.5 font-bold shadow-sm">
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
            <span className="text-[var(--accent-secondary-bright)] text-[11px] flex items-center gap-1.5 font-semibold">
              <ComposeIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> app/src/main/java/.../ui/AudioBufferVisualizer.kt
            </span>
            <button
              onClick={() => handleCopyCode(composeCode)}
              className="px-3 py-1 bg-[var(--accent-secondary)] border border-[var(--accent-secondary-border)] hover:border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg text-[11px] font-sans flex items-center gap-1.5 transition font-semibold"
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
            <span className="text-[var(--accent-secondary-bright)] text-[11px] flex items-center gap-1.5 font-semibold">
              <KotlinIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> app/src/main/java/.../engine/NativeAudioEngine.kt
            </span>
            <button
              onClick={() => handleCopyCode(kotlinEngineCode)}
              className="px-3 py-1 bg-[var(--accent-secondary)] border border-[var(--accent-secondary-border)] hover:border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg text-[11px] font-sans flex items-center gap-1.5 transition font-semibold"
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
