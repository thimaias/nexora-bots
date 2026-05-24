import { motion } from "motion/react";
import { Bot, ChevronRight, MessageSquare, ShieldAlert, Sparkles, Server } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden md:py-32"
    >
      {/* Cyber Grid moving background */}
      <div className="absolute inset-0 cyber-grid opacity-30 select-none pointer-events-none" />
      
      {/* Ambient lighting / Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] cyan-glow-orb rounded-full blur-[80px] md:blur-[140px] opacity-25 select-none pointer-events-none" />
      <div className="absolute bottom-1/5 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] purple-glow-orb rounded-full blur-[70px] md:blur-[120px] opacity-20 select-none pointer-events-none" />
      <div className="absolute right-10 top-1/3 w-[250px] md:w-[450px] h-[250px] md:h-[450px] gold-glow-orb rounded-full blur-[60px] md:blur-[100px] opacity-15 select-none pointer-events-none" />

      {/* Cyberpunk vector matrix layout lines */}
      <div className="absolute top-10 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-10 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />

      {/* Floating high-tech particles */}
      <div className="absolute top-1/3 left-10 md:left-24 animate-bounce duration-[4000ms] opacity-40 pointer-events-none z-0">
        <div className="flex items-center gap-1.5 p-2 bg-black/60 rounded-xl border border-cyber-blue/30 text-[10px] text-cyber-blue font-mono">
        <Sparkles className="w-3.5 h-3.5 animate-spin" /> IA ENGAGED
      </div>
    </div>
      <div className="absolute top-1/3 left-10 md:left-24 animate-bounce duration-[4000ms] opacity-40 pointer-events-none z-0">
        <div className="flex items-center gap-1.5 p-2 bg-black/60 rounded-xl border border-cyber-green/30 text-[10px] text-cyber-green font-mono">
          <Server className="w-3.5 h-3.5" /> HOSTING 24/7
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Company Badge Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyber-purple/40 shadow-[0_0_15px_-3px_rgba(189,0,255,0.2)]"
          >
            <Bot className="w-4 h-4 text-cyber-blue animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs text-slate-300 tracking-widest uppercase">
              La era del bot inteligente ha comenzado
            </span>
            <div className="w-2 h-2 rounded-full bg-cyber-blue animate-ping" />
          </motion.div>

          {/* Title with styling */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight select-none"
          >
            Bots Discord <br className="xs:hidden" />
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,240,255,0.3)]">
              Profesionales
            </span>
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl px-2 mb-10 leading-relaxed font-light"
          >
            Desarrollo de bots avanzados, IA y hosting premium. Automatiza tu comunidad, incrementa la retención y brinda seguridad impenetrable 24/7.
          </motion.p>

          {/* Buttons Area: Responsive & touch-friendly */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0 max-w-md sm:max-w-none"
          >
            {/* Primary Action: Ver planes */}
            <a
              href="#planes"
              className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-[#00f0ff] hover:bg-[#00e5ff] text-[#050609] font-bold shadow-[0_0_20px_0_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_0_rgba(0,240,255,0.6)] active:scale-95 transition-all outline-none duration-300 pointer-events-auto h-14 text-center cursor-pointer min-w-[180px]"
            >
              <span className="uppercase tracking-wider text-sm select-none">Ver Planes</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Contactar: Secondary Button */}
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-[#141622]/80 hover:bg-[#1a1c2d] text-slate-200 hover:text-white border border-white/10 hover:border-cyber-blue/30 active:scale-95 transition-all outline-none duration-300 h-14 text-center select-none cursor-pointer min-w-[180px]"
            >
              <span className="uppercase tracking-wider text-sm select-none">Contactar</span>
            </a>

            {/* Discord Server */}
            <a
              href="https://discord.gg/4HUYmnDaAz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold active:scale-95 transition-all outline-none duration-300 h-14 text-center select-none cursor-pointer min-w-[180px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="uppercase tracking-wider text-sm">Discord</span>
            </a>
          </motion.div>

          {/* Quick Metrics display inside Hero for instant authority */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full max-w-2xl grid grid-cols-3 gap-4 border-t border-white/5 pt-8 font-mono text-[11px] sm:text-xs text-slate-400"
          >
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold font-sans text-cyber-blue select-none">
                99.9%
              </span>
              <span className="uppercase tracking-widest text-[9px] mt-1 text-slate-500">Uptime</span>
            </div>
            <div className="border-x border-white/5 flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold font-sans text-cyber-purple select-none">
                150+
              </span>
              <span className="uppercase tracking-widest text-[9px] mt-1 text-slate-500">Servidores</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold font-sans text-cyber-gold select-none">
                &lt; 30ms
              </span>
              <span className="uppercase tracking-widest text-[9px] mt-1 text-slate-500">Latencia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cyber design scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 text-slate-400 text-[10px] sm:text-xs font-mono tracking-widest pointer-events-none select-none">
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-3 bg-cyber-blue rounded-full"
        />
      </div>
    </section>
  );
}
