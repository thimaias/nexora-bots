import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Cpu, RefreshCw, Compass, Ban, Headphones, ChevronRight } from "lucide-react";
import { FEATURES_DATA } from "../data/planes";

export default function Features() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-cyber-blue" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-cyber-purple" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-cyber-cyan" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-cyber-gold" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-cyber-green" />;
      case "Ban":
        return <Ban className="w-6 h-6 text-red-500" />;
      case "Headphones":
        return <Headphones className="w-6 h-6 text-cyber-blue" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyber-blue" />;
    }
  };

  const borderColors = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck": return "hover:border-cyber-blue/30";
      case "Sparkles": return "hover:border-cyber-purple/30";
      case "Cpu": return "hover:border-cyber-cyan/30";
      case "RefreshCw": return "hover:border-cyber-gold/30";
      case "Compass": return "hover:border-cyber-green/30";
      case "Ban": return "hover:border-red-500/30";
      case "Headphones": return "hover:border-cyber-blue/30";
      default: return "hover:border-cyber-blue/30";
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050609]/80 to-[#0a0b10]">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-10 w-96 h-96 purple-glow-orb rounded-full blur-[100px] opacity-10 pointer-events-none select-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 cyan-glow-orb rounded-full blur-[100px] opacity-10 pointer-events-none select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full mb-3">
              <span className="font-mono text-[10px] text-cyber-blue uppercase tracking-widest font-bold">
                BENEFICIOS PREMIUM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Características Ultra Modernas
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Infraestructura sofisticada para comunidades impecables. Brindamos todo el poder de automatización e Inteligencia Artificial en una sola marca corporativa.
            </p>
          </div>
          
          <a
            href="#contacto"
            className="text-xs font-bold uppercase tracking-wider font-mono text-cyber-blue hover:text-cyber-cyan transition-colors flex items-center gap-1 shrink-0 group py-2"
          >
            <span>Desarrollo a medida</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Features Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className={`p-6 rounded-2xl glass-panel border border-white/5 transition-all duration-300 flex flex-col justify-between ${borderColors(
                feature.iconName
              )} group`}
            >
              <div>
                {/* Header card icon & badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="font-mono text-[9px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 tracking-wider uppercase">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Info titles */}
                <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              {/* High-tech decorative index */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span>SYSTEM_MODULE // 0{idx + 1}</span>
                <span className="text-[8px] tracking-widest text-[#00f0ff] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
