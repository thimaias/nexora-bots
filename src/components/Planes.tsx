import { useState } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Users, Zap, Server, Check, ShoppingCart, Info, Activity, RefreshCw, Bot } from "lucide-react";
import { PLANS_DATA } from "../data/planes";
import { PlanType, Plan } from "../types";

export default function Planes() {
  const [selectedBase, setSelectedBase] = useState<PlanType>(PlanType.COMMUNITY);
  const [includeHosting, setIncludeHosting] = useState(true);
  const [includeDB, setIncludeDB] = useState(false);
  const [includeMulti, setIncludeMulti] = useState(false);

  // Dynamic price calculation
  const getBasePlan = (): Plan => {
    return PLANS_DATA.find((p) => p.id === selectedBase) || PLANS_DATA[1];
  };

  const calculateTotal = () => {
    const basePlan = getBasePlan();
    let total = basePlan.price;
    if (includeHosting && basePlan.id !== PlanType.HOSTING) {
      total += 300; // Hosting price
    }
    if (includeDB) {
      total += 450; // Database addon UYU
    }
    if (includeMulti) {
      total += 250; // Multilanguage support UYU
    }
    return total;
  };

  // WhatsApp link generator with beautiful structured order message
  const generateWhatsAppLink = () => {
    const basePlan = getBasePlan();
    const total = calculateTotal();
    
    let message = `🚀 *PEDIDO - NEXORA BOTS*\n\n`;
    message += `Hola, me interesa adquirir un bot personalizado de *Nexora Bots*:\n\n`;
    message += `🔹 *Plan Elegido:* ${basePlan.name} ($${basePlan.price} UYU)\n`;
    if (basePlan.id !== PlanType.HOSTING) {
      message += `🔹 *Hosting 24/7:* ${includeHosting ? "Sí ($300 UYU/mes adicionales)" : "No"}\n`;
    }
    message += `🔹 *Base de Datos Premium:* ${includeDB ? "Sí ($450 UYU)" : "No"}\n`;
    message += `🔹 *Multi-idioma:* ${includeMulti ? "Sí ($250 UYU)" : "No"}\n\n`;
    message += `💰 *Presupuesto Estimado Total:* $${total} UYU\n\n`;
    message += `Por favor, pónganse en contacto conmigo para afinar detalles técnicos y plazos de entrega.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/59895878416?text=${encodedMessage}`;
  };

  // Helper component to resolve icons dynamically
  const renderIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className={`w-8 h-8 ${colorClass}`} />;
      case "Users":
        return <Users className={`w-8 h-8 ${colorClass}`} />;
      case "Zap":
        return <Zap className={`w-8 h-8 ${colorClass}`} />;
      case "Server":
        return <Server className={`w-8 h-8 ${colorClass}`} />;
      default:
        return <ShieldAlert className={`w-8 h-8 ${colorClass}`} />;
    }
  };

  return (
    <section id="planes" className="py-24 relative overflow-hidden bg-[#050609]/60">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 cyan-glow-orb rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 purple-glow-orb rounded-full blur-3xl opacity-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full mb-3">
            <span className="font-mono text-[10px] text-cyber-purple uppercase tracking-widest font-bold">
              Precios Justos & Transparentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Elige el plan ideal para tu servidor
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ofrecemos infraestructura de vanguardia de alto rendimiento adaptada a tu escala. Desde bots básicos hasta integraciones masivas de IA.
          </p>
        </div>

        {/* Pricing Cards Grid: PC = Horizontal, Mobile = Vertical stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mb-24">
          {PLANS_DATA.map((plan) => {
            const isFeatured = plan.badgeText !== undefined;
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 border ${plan.glowClass} h-full group`}
              >
                {/* Visual badge top right */}
                {plan.badgeText && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md z-15">
                    {plan.badgeText}
                  </span>
                )}

                <div>
                  {/* Plan icon */}
                  <div className="mb-6 w-14 h-14 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {renderIcon(plan.iconName, plan.colorClass)}
                  </div>

                  {/* Title and price */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                    {plan.name}
                  </h3>
                  <div className="my-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-slate-400 text-xs font-mono lowercase tracking-wide">
                      {plan.currency} {plan.billing}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs font-light tracking-wide leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="border-t border-white/5 pt-5 mb-8">
                    <span className="text-[10px] uppercase text-slate-500 font-mono tracking-wider block mb-3">
                      Incluido en este plan:
                    </span>
                    <ul className="space-y-2.5 text-xs">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 leading-tight">
                          <Check className="w-4 h-4 text-cyber-blue shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer CTA button */}
                <a
                  href={`#contacto`}
                  onClick={() => {
                    setSelectedBase(plan.id);
                    const offsetElement = document.getElementById("configurator");
                    if (offsetElement) {
                      offsetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer select-none touch-friendly h-12 ${
                    isFeatured
                      ? "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-lg active:scale-95"
                      : "bg-[#141622] hover:bg-slate-900 border border-white/5 hover:border-cyber-blue/30 text-slate-200 active:scale-95"
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Configurar</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic AI Custom Bot Configurator Section */}
        <div id="configurator" className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyber-cyan/20 glow-blue max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/5 pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Activity className="w-5 h-5 text-cyber-blue animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                  Configurador Inteligente
                </h3>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm">
                Combina planes, añade hosting permanente o expande la IA para obtener una cotización real.
              </p>
            </div>
            <div className="bg-cyber-blue/10 border border-cyber-blue/30 px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-mono text-[10px] text-cyber-blue tracking-widest uppercase">
              <RefreshCw className="w-3 h-3 animate-spin" /> Cotización Activa
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customizer Selectors */}
            <div className="space-y-6">
              {/* Select Base Plan */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                  1. Plan de Base
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PLANS_DATA.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedBase(plan.id)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col transition-all cursor-pointer h-16 justify-center ${
                        selectedBase === plan.id
                          ? "bg-cyber-blue/10 border-cyber-blue text-white shadow-md"
                          : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-xs font-bold font-sans tracking-wide leading-none">{plan.name}</span>
                      <span className="text-[10px] font-mono mt-1 opacity-70">${plan.price} UYU</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                  2. Módulos Adicionales
                </label>
                <div className="space-y-2.5">
                  {/* Hosting Toggle */}
                  {selectedBase !== PlanType.HOSTING && (
                    <button
                      onClick={() => setIncludeHosting(!includeHosting)}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                        includeHosting
                          ? "bg-[#00f0ff]/5 border-cyber-blue/40 text-slate-200"
                          : "bg-slate-900/20 border-white/5 text-slate-500 hover:border-white/10"
                      }`}
                    >
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          checked={includeHosting}
                          onChange={() => {}} // Controlled by button
                          className="w-4 h-4 rounded accent-cyber-blue focus:ring-0 cursor-pointer text-cyber-blue bg-dark"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold leading-normal">Añadir Hosting Cloud 24/7 permanente</span>
                          <span className="text-[10px] font-light leading-snug">Online todo el tiempo sin cortes</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-cyber-green font-bold shrink-0">+$300/mes</span>
                    </button>
                  )}

                  {/* Database Toggle */}
                  <button
                    onClick={() => setIncludeDB(!includeDB)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                      includeDB
                        ? "bg-[#bd00ff]/5 border-cyber-purple/40 text-slate-200"
                        : "bg-slate-900/20 border-white/5 text-slate-500 hover:border-white/10"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeDB}
                        onChange={() => {}} // Controlled by button
                        className="w-4 h-4 rounded accent-cyber-purple focus:ring-0 cursor-pointer text-cyber-purple"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-normal">Base de Datos Premium</span>
                        <span className="text-[10px] font-light leading-snug">Persistencia total, historiales y respaldos</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-cyber-purple font-bold shrink-0">+$450</span>
                  </button>

                  {/* Multi-language Toggle */}
                  <button
                    onClick={() => setIncludeMulti(!includeMulti)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                      includeMulti
                        ? "bg-[#ffd700]/5 border-cyber-gold/40 text-slate-200"
                        : "bg-slate-900/20 border-white/5 text-slate-500 hover:border-white/10"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeMulti}
                        onChange={() => {}} // Controlled by button
                        className="w-4 h-4 rounded accent-cyber-gold focus:ring-0 cursor-pointer text-cyber-gold"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-normal">Traductor & Multi-Idioma</span>
                        <span className="text-[10px] font-light leading-snug">Traducción simultánea integrada por IA</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-cyber-gold font-bold shrink-0">+$250</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Calculations Summary Card */}
            <div className="flex flex-col justify-between p-6 bg-slate-950/60 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
                <Bot className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-white/5">
                  Resumen de la Orden
                </h4>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Módulo Base ({getBasePlan().name})</span>
                    <span className="font-mono text-slate-200">${getBasePlan().price} UYU</span>
                  </div>
                  {includeHosting && getBasePlan().id !== PlanType.HOSTING && (
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Hosting 24/7 (SaaS)</span>
                      <span className="font-mono text-cyber-green">+$300 UYU</span>
                    </div>
                  )}
                  {includeDB && (
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Persistencia DB SQL</span>
                      <span className="font-mono text-cyber-purple">+$450 UYU</span>
                    </div>
                  )}
                  {includeMulti && (
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Modulo Multi-Idioma</span>
                      <span className="font-mono text-cyber-gold">+$250 UYU</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 relative z-10">
                <div className="flex justify-between items-baseline mb-5">
                  <span className="text-xs font-bold text-slate-300 uppercase">Presupuesto Final:</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                      ${calculateTotal()}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono ml-1">
                      UYU {getBasePlan().id === PlanType.HOSTING ? "/mes" : "único"}
                    </span>
                  </div>
                </div>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-cyber-green/10 hover:bg-cyber-green/20 text-cyber-green border border-cyber-green/30 hover:border-cyber-green/50 hover:shadow-[0_0_15px_-3px_rgba(57,255,20,0.3)] transition-all font-bold rounded-xl text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2 select-none h-14"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Encargar por WhatsApp</span>
                </a>
                <span className="block mt-2.5 text-center text-[10px] text-slate-500 font-mono tracking-wide">
                  Enlace directo seguro — Recibe soporte en segundos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
