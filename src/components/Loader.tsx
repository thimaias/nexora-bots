import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Shield, Cpu, Wifi } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const logs = [
    "INITIALIZING NEXORA NEURAL INTERFACE...",
    "ESTABLISHING SECURE GATEWAY ON PORT 3000...",
    "CONNECTING TO NOVACORE CLOUD CORE...",
    "MOUNTING DISCORD WEBSOCKET INTEGRATION...",
    "OPTIMIZING RESPONSIVE INTERFACE ASSETS...",
    "CALIBRATING ARTIFICIAL INTELLIGENCE CORE...",
    "NEXORA SYSTEM ONLINE - ENJOY THE FUTURE."
  ];

  useEffect(() => {
    // Progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Speed up near the end
        const increment = prev > 70 ? 10 : Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) {
      const logInterval = setInterval(() => {
        setLogIndex((prev) => (prev < logs.length - 2 ? prev + 1 : prev));
      }, 250);
      return () => clearInterval(logInterval);
    } else {
      setLogIndex(logs.length - 1);
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500); // Allow fadeout animation
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050609] p-4 text-white overflow-hidden"
        >
          {/* Futuristic background lines */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 cyan-glow-orb rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 purple-glow-orb rounded-full blur-3xl opacity-30" />

          <div className="w-full max-w-md glass-panel p-6 rounded-2xl border border-cyber-purple/20 md:border-cyber-purple/30 glow-purple flex flex-col gap-4 relative">
            {/* Header decor */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-blue animate-pulse" />
                <span className="font-mono text-xs text-slate-400 tracking-wider">
                  NEXORA_CORE_v2.06.sh
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Logo area */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-2 border-dashed border-cyber-blue flex items-center justify-center mb-3 relative"
              >
                <Cpu className="w-7 h-7 text-cyber-blue animate-pulse" />
                <div className="absolute -inset-1 rounded-full border border-cyber-purple/30 animate-ping opacity-40" />
              </motion.div>
              <h1 className="text-2xl font-bold tracking-widest text-[#00f0ff] uppercase glow-text-blue">
                Nexora <span className="text-[#bd00ff]">Bots</span>
              </h1>
              <p className="font-mono text-[10px] text-slate-400 mt-1 uppercase tracking-widest">
                NovaCore Deployment Active
              </p>
            </div>

            {/* Loader terminal strings */}
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-[11px] leading-relaxed select-none min-h-[72px] flex flex-col justify-end">
              <div className="text-slate-500">
                &gt; systemctl start nexora.service <span className="text-cyber-green">[OK]</span>
              </div>
              {logs.slice(Math.max(0, logIndex - 2), logIndex + 1).map((log, idx) => (
                <div
                  key={idx}
                  className={`line-clamp-1 ${
                    idx === logs.slice(Math.max(0, logIndex - 2), logIndex + 1).length - 1
                      ? "text-cyber-blue"
                      : "text-slate-400"
                  }`}
                >
                  &gt; {log}
                </div>
              ))}
            </div>

            {/* Load bar */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <Wifi className="w-3.5 h-3.5 text-cyber-purple" /> Link: Stable (Port 3000)
                </span>
                <span className="text-cyber-blue font-bold">{progress}%</span>
              </div>
              <div className="w-full bg-[#141622] rounded-full h-2.5 overflow-hidden border border-white/5 p-0.5">
                <motion.div
                  className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            </div>
            
            {/* Corner retro decors */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyber-blue" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyber-purple" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyber-purple" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyber-green" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
