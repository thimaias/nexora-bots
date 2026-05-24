import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Shield, Cpu, RefreshCw, Layers, Sparkles, MessageSquare, BarChart3, ToggleLeft, ToggleRight, Play, Terminal, HelpCircle } from "lucide-react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"general" | "moderation" | "ai" | "stats">("general");
  
  // Tab 1 state: General Server controls
  const [botStatus, setBotStatus] = useState<"ONLINE" | "REBOOTING" | "OFFLINE">("ONLINE");
  const [cpuUsage, setCpuUsage] = useState(24);
  const [ramUsage, setRamUsage] = useState(1.4);
  const [uptime, setUptime] = useState("14d 08h 12m");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[15:00:10] Loaded module: AntiSpamCore v1.4",
    "[15:00:11] Connected to Discord Gateway (Gateway version 10)",
    "[15:00:12] Synchronization with database cloud cluster Successful.",
    "[15:02:40] [AntiSpam] Muted user 'SpamBot9912' for unsolicited links."
  ]);

  // Tab 2 state: Moderation modules
  const [antiSpamActive, setAntiSpamActive] = useState(true);
  const [antiRaidActive, setAntiRaidActive] = useState(true);
  const [ticketsActive, setTicketsActive] = useState(false);
  const [modHistory, setModHistory] = useState([
    { user: "xX_Gamer_Xx", action: "ADVERTENCIA", reason: "Uso excesivo de CAPS", time: "Hace 2 min" },
    { user: "CasinoLinkBot", action: "MUTEO", reason: "Spam de links prohibidos", time: "Hace 15 min" },
    { user: "RaidLeader1", action: "EXPULSIÓN", reason: "Patrones sospechosos detectados", time: "Hace 1 hora" }
  ]);

  // Tab 3 state: AI simulation
  const [selectedPersona, setSelectedPersona] = useState<"cyber" | "helper" | "troll">("cyber");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { sender: "user", text: "¿Qué puedes hacer?" },
    { sender: "bot", text: "Soy Nexora Neural Interface. Modero con IA, administro niveles y gestiono integraciones premium de forma autónoma." }
  ]);

  // Tab 4 state: stats
  const [activeUsersCount, setActiveUsersCount] = useState(4820);

  // Monitor simulated server stats
  useEffect(() => {
    const statInterval = setInterval(() => {
      if (botStatus === "ONLINE") {
        setCpuUsage((prev) => {
          const delta = Math.floor(Math.random() * 11) - 5;
          return Math.max(10, Math.min(85, prev + delta));
        });
        setRamUsage((prev) => {
          const delta = parseFloat((Math.random() * 0.1 - 0.05).toFixed(2));
          return Math.max(0.8, Math.min(4.2, prev + delta));
        });
        setActiveUsersCount((prev) => {
          const delta = Math.floor(Math.random() * 15) - 7;
          return prev + delta;
        });
      }
    }, 2000);

    return () => clearInterval(statInterval);
  }, [botStatus]);

  // Handle rebooting simulation
  const triggerReboot = () => {
    if (botStatus === "REBOOTING") return;
    setBotStatus("REBOOTING");
    setTerminalLogs((prev) => [...prev, "[!] Received SIGTERM. Shutting down websocket connections..."]);
    
    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        "[!] WEBSOCKET DISCONNECTED.",
        "[15:03:01] Initializing safe system startup procedures...",
        "[15:03:02] Loading custom models and neural libraries...",
        "[15:03:03] Re-established secure handshake with gateway.",
        "[15:03:04] Nexora online and fully operational."
      ]);
      setBotStatus("ONLINE");
    }, 2500);
  };

  // Chat simulator trigger
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const query = userInput;
    setChatHistory((prev) => [...prev, { sender: "user", text: query }]);
    setUserInput("");

    // Simulate AI response delays based on persona
    setTimeout(() => {
      let botResponse = "";
      if (selectedPersona === "cyber") {
        if (query.toLowerCase().includes("hola") || query.toLowerCase().includes("buen")) {
          botResponse = "Saludos, usuario. Nexora Neural Core activo. ¿En qué módulo automatizado deseas interactuar?";
        } else if (query.toLowerCase().includes("precio") || query.toLowerCase().includes("plan")) {
          botResponse = "Los planos empiezan en $350 UYU. Te recomiendo usar el configurador táctil de arriba para ver precios.";
        } else {
          botResponse = "Transmisión recibida. Procesando parámetros neuronales en servidores dedicados NovaCore...";
        }
      } else if (selectedPersona === "helper") {
        if (query.toLowerCase().includes("hola") || query.toLowerCase().includes("buen")) {
          botResponse = "¡Hola! Soy tu asistente de Nexora. ¿Cómo puedo ayudarte a organizar tu comunidad hoy? 😊";
        } else {
          botResponse = "¡Me encanta tu propuesta! Puedo programar esa característica para tu servidor en poco tiempo. Contáctanos mediante WhatsApp.";
        }
      } else if (selectedPersona === "troll") {
        botResponse = "Uf... procesar tu comando me costó un ciclo entero de CPU. Qué bajo presupuesto... broma externa. ¡Prueba Nexora Premium!";
      }

      setChatHistory((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 600);
  };

  return (
    <section id="preview" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0b10] to-[#050609]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] purple-glow-orb rounded-full blur-[100px] opacity-10 pointer-events-none select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full mb-3">
            <span className="font-mono text-[10px] text-cyber-cyan uppercase tracking-widest font-bold">
              PREVISUALIZACIÓN EN VIVO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Explora el Panel de Control NovaCore
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Diseñamos interfaces de administración asombrosas y cómodas. Prueba los módulos interactivos simulando el comportamiento real de tus bots.
          </p>
        </div>

        {/* Dashboard Wrapper */}
        <div className="glass-panel border border-white/5 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto glow-purple bg-slate-950/80">
          
          {/* Dashboard Header Bar */}
          <div className="bg-[#050609] border-b border-white/5 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase font-mono text-slate-200">
                  NovaCore Panel // v2.56
                </h3>
                <p className="text-[10px] text-slate-500 font-mono tracking-wide">
                  PROYECTO ACTIVO: NEXORA_DISCORD_CLIENT
                </p>
              </div>
            </div>

            {/* Quick stats on top */}
            <div className="flex items-center gap-6 font-mono text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyber-blue" />
                <span>CPU: <b className="text-white">{botStatus === "REBOOTING" ? "99%" : `${cpuUsage}%`}</b></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyber-purple" />
                <span>RAM: <b className="text-white">{botStatus === "REBOOTING" ? "0.2GB" : `${ramUsage.toFixed(2)}GB`}</b></span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 min-h-[460px]">
            {/* Dashboard Sub Sidebar - Tabs Selector */}
            <div className="border-r border-white/5 bg-[#050609]/40 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto scrollbar-none md:overflow-x-visible">
              
              {/* Tab Selector Buttons */}
              <button
                onClick={() => setActiveTab("general")}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all text-xs font-mono tracking-wider font-bold shrink-0 select-none cursor-pointer ${
                  activeTab === "general"
                    ? "bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue"
                    : "bg-transparent border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>General</span>
              </button>

              <button
                onClick={() => setActiveTab("moderation")}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all text-xs font-mono tracking-wider font-bold shrink-0 select-none cursor-pointer ${
                  activeTab === "moderation"
                    ? "bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple"
                    : "bg-transparent border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Seguridad</span>
              </button>

              <button
                onClick={() => setActiveTab("ai")}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all text-xs font-mono tracking-wider font-bold shrink-0 select-none cursor-pointer ${
                  activeTab === "ai"
                    ? "bg-cyber-gold/10 border border-cyber-gold/30 text-cyber-gold"
                    : "bg-transparent border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>IA Neurona</span>
              </button>

              <button
                onClick={() => setActiveTab("stats")}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all text-xs font-mono tracking-wider font-bold shrink-0 select-none cursor-pointer ${
                  activeTab === "stats"
                    ? "bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
                    : "bg-transparent border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analíticas</span>
              </button>
            </div>

            {/* Dashboard Tab Content - Wide Panel (3 cols) */}
            <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {activeTab === "general" && (
                  <motion.div
                    key="general"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Metric Card */}
                      <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col justify-between h-[100px]">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Estado del Servicio
                        </span>
                        <div className="flex items-center justify-between mt-2">
                          <span
                            className={`text-lg font-bold font-mono tracking-widest ${
                              botStatus === "ONLINE"
                                ? "text-cyber-green glow-text-green"
                                : botStatus === "REBOOTING"
                                ? "text-cyber-purple animate-pulse"
                                : "text-red-500"
                            }`}
                          >
                            ● {botStatus}
                          </span>
                          <button
                            onClick={triggerReboot}
                            disabled={botStatus === "REBOOTING"}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 hover:text-white transition-all disabled:opacity-50 select-none cursor-pointer"
                          >
                            <RefreshCw className={`w-4 h-4 ${botStatus === "REBOOTING" ? "animate-spin" : ""}`} />
                          </button>
                        </div>
                      </div>

                      {/* Metric Card */}
                      <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col justify-between h-[100px]">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Tiempo de Actividad
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-xl font-mono text-white font-bold select-none">{uptime}</span>
                          <span className="text-[9px] text-[#00f0ff] uppercase bg-cyber-blue/10 px-2 py-0.5 rounded border border-cyber-blue/20">
                            99.99% Uptime
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Integrated Terminal Logs panel */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-mono mb-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Terminal NovaCore Cloud Output:</span>
                      </div>
                      <div className="bg-black/60 p-4 rounded-xl border border-white/5 font-mono text-[10px] sm:text-[11px] h-[160px] overflow-y-auto leading-relaxed text-slate-300">
                        {terminalLogs.slice(-5).map((log, idx) => (
                          <div key={idx} className="line-clamp-1">
                            <span className="text-slate-500">&gt;&gt;</span> {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "moderation" && (
                  <motion.div
                    key="moderation"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Filtros de Defensas Activas (Haz clic para alternar)
                      </h4>
                      
                      {/* Toggles */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button
                          onClick={() => setAntiSpamActive(!antiSpamActive)}
                          className={`p-4 rounded-xl border border-white/5 flex items-center justify-between text-left transition-all cursor-pointer ${
                            antiSpamActive ? "bg-[#00f0ff]/5 border-cyber-blue/30 text-white" : "bg-slate-900/20 text-slate-500"
                          }`}
                        >
                          <span className="text-xs font-bold font-sans">Filtro Anti-Spam</span>
                          {antiSpamActive ? (
                            <ToggleRight className="w-8 h-8 text-cyber-blue" />
                          ) : (
                            <ToggleLeft className="w-8 h-8 text-slate-600" />
                          )}
                        </button>

                        <button
                          onClick={() => setAntiRaidActive(!antiRaidActive)}
                          className={`p-4 rounded-xl border border-white/5 flex items-center justify-between text-left transition-all cursor-pointer ${
                            antiRaidActive ? "bg-[#bd00ff]/5 border-cyber-purple/30 text-white" : "bg-slate-900/20 text-slate-500"
                          }`}
                        >
                          <span className="text-xs font-bold font-sans">Protección Anti-Raid</span>
                          {antiRaidActive ? (
                            <ToggleRight className="w-8 h-8 text-cyber-purple" />
                          ) : (
                            <ToggleLeft className="w-8 h-8 text-slate-600" />
                          )}
                        </button>

                        <button
                          onClick={() => setTicketsActive(!ticketsActive)}
                          className={`p-4 rounded-xl border border-white/5 flex items-center justify-between text-left transition-all cursor-pointer ${
                            ticketsActive ? "bg-[#ffd700]/5 border-cyber-gold/30 text-white" : "bg-slate-900/20 text-slate-500"
                          }`}
                        >
                          <span className="text-xs font-bold font-sans">Sistema Tickets</span>
                          {ticketsActive ? (
                            <ToggleRight className="w-8 h-8 text-cyber-gold" />
                          ) : (
                            <ToggleLeft className="w-8 h-8 text-slate-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Historical moderation logging table */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Últimos Incidentes Automatizados
                      </h4>
                      <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-900/30">
                        <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                          <thead>
                            <tr className="border-b border-white/5 bg-black/40 text-slate-400 text-[10px] font-mono tracking-wider">
                              <th className="p-3">Usuario</th>
                              <th className="p-3">Acción</th>
                              <th className="p-3">Motivo</th>
                              <th className="p-3 text-right">Tiempo</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            {modHistory.map((row, idx) => (
                              <tr key={idx} className="hover:bg-white/5 font-mono">
                                <td className="p-3 font-sans font-bold">{row.user}</td>
                                <td className="p-3">
                                  <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                      row.action === "ADVERTENCIA"
                                        ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                                        : row.action === "MUTEO"
                                        ? "bg-purple-500/10 text-purple-500 border border-purple-500/20"
                                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                                    }`}
                                  >
                                    {row.action}
                                  </span>
                                </td>
                                <td className="p-3 font-light text-slate-400">{row.reason}</td>
                                <td className="p-3 text-right text-slate-500">{row.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "ai" && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5 flex-1 flex flex-col"
                  >
                    {/* Persona Selector inside AI Simulator */}
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                        Personalidad de IA:
                      </span>
                      <div className="flex gap-2">
                        {(["cyber", "helper", "troll"] as const).map((persona) => (
                          <button
                            key={persona}
                            onClick={() => setSelectedPersona(persona)}
                            className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono tracking-wider capitalize select-none cursor-pointer transition-all ${
                              selectedPersona === persona
                                ? "bg-cyber-gold/10 border-cyber-gold text-cyber-gold font-bold"
                                : "bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {persona === "cyber" ? "Cyberpunk" : persona === "helper" ? "Amigable" : "Sarcástico"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chat simulator mockup structure */}
                    <div className="flex-1 border border-white/5 bg-slate-950 p-4 rounded-xl flex flex-col justify-between h-[210px] sm:h-[240px]">
                      <div className="flex-1 overflow-y-auto space-y-3 mb-4 text-xs pr-1">
                        {chatHistory.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                          >
                            <span className="text-[9px] font-mono text-slate-500 mb-0.5">
                              {msg.sender === "user" ? "Tú (Cliente)" : "Nexora_Neural_AI Core"}
                            </span>
                            <div
                              className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                                msg.sender === "user"
                                  ? "bg-cyber-blue/10 border border-cyber-blue/20 text-slate-100"
                                  : "bg-[#141622] border border-white/5 text-slate-200"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chat text input */}
                      <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-white/5 pt-3">
                        <input
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder="Pregúntale algo al bot (ej: hola, planes)..."
                          className="flex-1 bg-slate-905 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyber-blue/40 font-mono tracking-wide placeholder-slate-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 bg-cyber-gold text-slate-905 font-bold rounded-xl active:scale-95 transition-all text-xs flex items-center gap-1.5 select-none cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-black" />
                          <span className="hidden sm:inline uppercase font-mono">Enviar</span>
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}

                {activeTab === "stats" && (
                  <motion.div
                    key="stats"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                          Usuarios Concurrentes Activos
                        </span>
                        <div className="mt-2 text-2xl font-bold font-mono text-cyber-cyan select-none">
                          {activeUsersCount.toLocaleString()}
                        </div>
                      </div>

                      <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5 flex flex-col justify-between">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                          Peticiones / Minuto (Gateway)
                        </span>
                        <div className="mt-2 text-2xl font-bold font-mono text-cyber-purple select-none flex items-center gap-2">
                          <span>174.5k</span>
                          <span className="text-[9px] text-[#bd00ff] bg-cyber-purple/10 border border-cyber-purple/20 px-2 rounded-md animate-pulse">
                            Normal
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Cyber vector graph panel mockup using SVG grids */}
                    <div className="border border-white/5 bg-slate-900/20 rounded-xl p-4 h-[155px] relative flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 px-1 border-b border-white/5 pb-2">
                        <span>ESTADÍSTICAS GLOBALES DEL SERVIDOR (Uptime de red)</span>
                        <span className="text-cyber-cyan">HISTORIAL 24 HORAS</span>
                      </div>
                      
                      {/* Interactive bar graph made in pure SVG vector matching cyberpunk layout */}
                      <div className="flex-1 flex gap-3 sm:gap-4 items-end pt-5 px-2 relative min-h-[75px]">
                        {/* Dynamic background horizontal auxiliary lines */}
                        <div className="absolute inset-x-0 h-[1px] border-t border-dashed border-white/5 top-1/4 pointer-events-none" />
                        <div className="absolute inset-x-0 h-[1px] border-t border-dashed border-white/5 top-2/4 pointer-events-none" />
                        <div className="absolute inset-x-0 h-[1px] border-t border-dashed border-white/5 top-3/4 pointer-events-none" />

                        {/* Bars loops */}
                        {[35, 45, 60, 40, 75, 90, 82, 95, 68, 79, 88, 99].map((height, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 relative group">
                            
                            {/* Hover info tooltip */}
                            <div className="absolute bottom-full mb-1 bg-black text-white text-[8px] font-mono py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition duration-150 border border-cyber-blue/30 z-10 select-none">
                              {height}%
                            </div>
                            
                            {/* Bar segment */}
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
                              className={`w-full rounded-t-md hover:brightness-110 cursor-pointer ${
                                idx === 11
                                  ? "bg-gradient-to-t from-cyber-purple to-cyber-cyan"
                                  : "bg-gradient-to-t from-[#050609] to-cyber-blue/50"
                              }`}
                            />
                            
                            {/* Hour label */}
                            <span className="text-[7px] font-mono text-slate-500 tracking-wider">
                              {idx * 2}H
                            </span>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom bar of dashboard panel */}
              <div className="mt-8 border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 gap-2">
                <span>CONECTADO: NEXORA NEURAL NODE URUGUAY</span>
                <span className="text-[8px] text-cyber-blue">SECURE AES-256 ENCRYPTION PROT_ENGAGED</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
