import { motion } from "motion/react";
import { ShieldAlert, Users, Zap, Clock, ThumbsUp, Code, Award } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      icon: Clock,
      value: "24/7/365",
      label: "Uptime Continuo",
      description: "Infraestructura robusta con tolerancia a fallos masivos.",
      color: "text-cyber-green"
    },
    {
      icon: Users,
      value: "15,000+",
      label: "Miembros Activos",
      description: "Soportando picos de interacción y tráfico de spam concurrentes.",
      color: "text-cyber-blue"
    },
    {
      icon: Code,
      value: "100%",
      label: "Desarrollo Propio",
      description: "Código limpio, eficiente y modificado a medida utilizando TypeScript.",
      color: "text-cyber-purple"
    },
    {
      icon: Award,
      value: "3+ Años",
      label: "Experiencia Líder",
      description: "Programando integraciones, automatizaciones y algoritmos de IA.",
      color: "text-cyber-gold"
    }
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-[#050609]/60">
      <div className="absolute top-1/4 right-0 w-96 h-96 purple-glow-orb rounded-full blur-[110px] opacity-10 pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 cyan-glow-orb rounded-full blur-[110px] opacity-10 pointer-events-none select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Text Description Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full">
              <span className="font-mono text-[10px] text-cyber-purple uppercase tracking-widest font-bold">
                ESTADIO TECNOLÓGICO
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Desarrollado por <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent glow-text-blue">NovaCore</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              NovaCore desarrolla bots avanzados para Discord utilizando tecnología moderna e inteligencia artificial.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Nuestro enfoque no radica en re-utilizar plantillas desgastadas. Formulamos cada microservicio desde cero para optimizar el consumo de recursos de memoria y CPU, asegurando que tus bots respondan al instante sin lag, incluso bajo un ataque masivo de spam.
            </p>

            {/* Quick trust checklist */}
            <div className="pt-4 border-t border-white/5 space-y-3 font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <ThumbsUp className="w-4 h-4 text-cyber-blue" />
                <span>Desplegado bajo arquitectura moderna Cloud Run.</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-4 h-4 text-cyber-purple" />
                <span>Estructura aislada y respaldos periódicos activos.</span>
              </div>
            </div>
          </div>

          {/* Graphical metrics grids block */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    className="p-6 rounded-2xl glass-panel border border-white/5 bg-[#050609]/40 hover:border-white/10 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Stat Icon */}
                      <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <IconComp className={`w-5 h-5 ${stat.color}`} />
                      </div>

                      {/* Numbers */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mb-1 select-none">
                        {stat.value}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        {stat.label}
                      </p>
                    </div>

                    <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">
                      {stat.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
