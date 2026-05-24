import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Bot, MessageSquare, Compass, DollarSign, Info, Phone, Send, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: Compass },
    { name: "Planes", href: "#planes", icon: DollarSign },
    { name: "Características", href: "#features", icon: Bot },
    { name: "Dashboard", href: "#preview", icon: Send },
    { name: "Nosotros", href: "#nosotros", icon: Info },
    { name: "Contacto", href: "#contacto", icon: Phone },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-panel border-b border-white/5 py-3 shadow-[0_8px_32px_0_rgba(5,6,9,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyber-blue to-cyber-purple flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#050609] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyber-blue group-hover:text-cyber-cyan transition-colors" />
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyber-blue to-cyber-purple rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-widest text-[#f3f4f6] text-lg uppercase leading-none">
                Nexora<span className="text-cyber-blue">.</span>
              </span>
              <span className="font-mono text-[9px] text-cyber-purple tracking-widest uppercase">
                NovaCore Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyber-cyan transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Discord CTA Action Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://discord.gg/4HUYmnDaAz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-4 py-2 rounded-xl transition duration-300 flex items-center gap-2 border border-[#5865F2]/40 bg-[#5865F2]/10 hover:bg-[#5865F2]/20"
            >
              <MessageSquare className="w-4 h-4 text-[#5865F2] group-hover:text-white transition-colors" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 group-hover:text-white">
                Discord Server
              </span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
            </a>
          </div>

          {/* Hamburger Menu Toggle - Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 sm:p-3 rounded-xl bg-slate-900/40 border border-white/5 text-slate-300 hover:text-white hover:border-cyber-blue/30 active:scale-95 transition-all text-xl"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-30 md:hidden overflow-hidden"
          >
            <div className="glass-panel border-b border-cyber-purple/20 shadow-2xl p-6 flex flex-col gap-5 bg-[#050609]/95">
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-slate-300 active:bg-cyber-blue/5 active:border-cyber-blue/30 transition-all font-medium text-sm text-[13px]"
                    >
                      <LinkIcon className="w-4 h-4 text-cyber-blue" />
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-white/5 pt-4">
                <a
                  href="https://discord.gg/4HUYmnDaAz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl active:scale-95 transition-all text-sm uppercase tracking-wider"
                >
                  <MessageSquare className="w-5 h-5" />
                  Ir al Servidor Discord
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
