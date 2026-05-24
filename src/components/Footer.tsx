import { Bot, Mail, Phone, Instagram, MessageSquare, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Phone, href: "https://wa.me/59895878416", color: "hover:text-[#39ff14] hover:border-[#39ff14]/30" },
    { icon: Instagram, href: "https://instagram.com/thimatias131", color: "hover:text-[#bd00ff] hover:border-[#bd00ff]/30" },
    { icon: MessageSquare, href: "https://discord.gg/4HUYmnDaAz", color: "hover:text-[#00f0ff] hover:border-[#00f0ff]/30" },
    { icon: Github, href: "https://github.com", color: "hover:text-[#ffffff] hover:border-[#ffffff]/30" }
  ];

  const quickLinks1 = [
    { name: "Plan Starter", href: "#planes" },
    { name: "Plan Community", href: "#planes" },
    { name: "Plan Premium", href: "#planes" },
    { name: "Hosting Cloud 24/7", href: "#planes" }
  ];

  const quickLinks2 = [
    { name: "Seguridad Avanzada", href: "#features" },
    { name: "Modelos Inteligencia Artificial", href: "#features" },
    { name: "Panel de Administración", href: "#preview" },
    { name: "Ubicaciones Latencia", href: "#nosotros" }
  ];

  return (
    <footer className="bg-[#050609] border-t border-white/5 pt-16 pb-8 text-slate-400 relative overflow-hidden font-sans">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 purple-glow-orb rounded-full blur-[120px] opacity-10 pointer-events-none select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid content blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 mb-12 border-b border-white/5 text-xs sm:text-sm">
          
          {/* Col 1 Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#inicio" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyber-blue to-cyber-purple flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#050609] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyber-blue" />
                </div>
              </div>
              <span className="font-bold tracking-widest text-[#f3f4f6] text-base uppercase leading-none">
                Nexora Bots
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Desarrollo de bots de Discord de última generación operando bajo inteligencia artificial y tecnología hosting premium de NovaCore.
            </p>

            {/* Social channels small row */}
            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((social, index) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-center text-slate-450 hover:bg-slate-950 transition-all duration-200 select-none ${social.color}`}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2 Quick service Links */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-white text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Planes Disponibles
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks1.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-cyber-cyan transition-colors duration-200 leading-snug">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 Quick feature Links */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-white text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Características Clave
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks2.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-cyber-purple transition-colors duration-200 leading-snug">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 Direct developers channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Contacto NovaCore
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-cyber-purple shrink-0" />
                <a href="https://instagram.com/thimatias131" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors select-none">
                  @thimatias131
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyber-green shrink-0" />
                <a href="https://wa.me/59895878416" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors select-none">
                  +598 95 878 416
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-cyber-blue shrink-0" />
                <a href="https://discord.gg/4HUYmnDaAz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors select-none">
                  discord.gg/4HUYmnDaAz
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal area */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[10px] text-slate-500 tracking-wider">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span>Logo NovaCore desarrollador</span>
            <span>Uptime: 99.9%</span>
            <span>Latencia Cloud: &lt; 30ms</span>
          </div>
          <span className="text-right block">
            Nexora Bots © 2026 — Todos los derechos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}
