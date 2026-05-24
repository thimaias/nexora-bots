import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Instagram, Send, Terminal, ShieldCheck, Mail, User, Info, CheckCircle2, ChevronRight } from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    servicio: "community",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    setIsSubmitting(true);
    // Simulate high-tech network handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  // Dedicated generator to compose a beautifully formatted order directly for WhatsApp
  const handleWhatsAppSend = () => {
    const serviceName = 
      formData.servicio === "starter" ? "Plan Starter ($350 UYU)" :
      formData.servicio === "community" ? "Plan Community ($950 UYU)" :
      formData.servicio === "premium" ? "Plan Premium ($3990 UYU)" :
      formData.servicio === "hosting" ? "Hosting de Bots ($300 UYU/mes)" : "Módulo a Medida";

    let message = `👾 *FORMULARIO DE CONTACTO - NEXORA*\n\n`;
    message += `👤 *Nombre:* ${formData.nombre}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    message += `📦 *Servicio de Interés:* ${serviceName}\n\n`;
    message += `📝 *Mensaje:* ${formData.mensaje}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/59895878416?text=${encoded}`, "_blank");
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      servicio: "community",
      mensaje: ""
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050609] to-[#0a0b10]">
      {/* Visual background lights */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] cyan-glow-orb rounded-full blur-[100px] opacity-15 pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] purple-glow-orb rounded-full blur-[90px] opacity-10 pointer-events-none select-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-gold/10 border border-cyber-gold/30 rounded-full mb-3">
            <span className="font-mono text-[10px] text-cyber-gold uppercase tracking-widest font-bold">
              CONEXIÓN DIRECTA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Contáctanos e Inicia tu Proyecto
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Estamos disponibles para responder tus preguntas y planificar las funcionalidades de tu bot Discord. Elige tu canal preferido.
          </p>
        </div>

        {/* Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Column 1: Direct Social Channels with hover neon glazes */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-white font-sans uppercase">
                Canales de Atención
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Chatea con el equipo de soporte directores y diseñadores de NovaCore. Atendemos solicitudes rápidamente.
              </p>
            </div>

            {/* Glowing Buttons Block */}
            <div className="space-y-4 my-8 flex-1 flex flex-col justify-center">
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/59895878416"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl glass-panel border border-cyber-green/20 hover:border-cyber-green/50 hover:bg-[#39ff14]/5 transition-all duration-300 md:glow-green"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-cyber-green" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">WhatsApp Directo</span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">+598 95 878 416</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </a>

              {/* Instagram Button */}
              <a
                href="https://instagram.com/thimatias131"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl glass-panel border border-cyber-purple/20 hover:border-cyber-purple/50 hover:bg-[#bd00ff]/5 transition-all duration-300 md:glow-purple"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5 text-cyber-purple" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Instagram Oficial</span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">@thimatias131</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </a>

              {/* Discord Button */}
              <a
                href="https://discord.gg/4HUYmnDaAz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl glass-panel border border-cyber-blue/20 hover:border-cyber-blue/50 hover:bg-[#00f0ff]/5 transition-all duration-300 md:glow-blue"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Discord Server Support</span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">Servidor Oficial Nexora</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </a>

            </div>

            {/* Underline Info */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-white/5 font-mono text-[10px] text-slate-500 flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-cyber-gold animate-pulse shrink-0" />
              <span>Soporte prioritario disponible para todos los planes autorizados de NovaCore.</span>
            </div>
          </div>

          {/* Column 2: Elegant Cybernetic Form, completely stacked and optimized for mobile */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative bg-[#0a0b10]/90 h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="border-b border-white/5 pb-3 mb-1">
                      <h4 className="text-sm font-mono uppercase tracking-widest text-cyber-blue">
                        // SECURE_CONTACT_TRANSMISSION
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono">
                        Por favor, completa los campos para emitir tu cotización.
                      </p>
                    </div>

                    {/* Name input */}
                    <div className="relative">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#00f0ff] mb-1.5 ml-1">
                        Nombre Completo
                      </label>
                      <div className="relative flex items-center">
                        <User className="absolute left-4 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre, apodo o empresa"
                          className="w-full bg-[#050609]/60 border border-white/5 text-xs text-white rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-cyber-blue/50 placeholder-slate-600 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="relative">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#bd00ff] mb-1.5 ml-1">
                        Correo Electrónico
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@correo.com"
                          className="w-full bg-[#050609]/60 border border-white/5 text-xs text-white rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-cyber-purple/50 placeholder-slate-600 transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Service Drops Selector */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#ffd700] mb-1.5 ml-1">
                        Servicio Requerido
                      </label>
                      <div className="relative">
                        <select
                          name="servicio"
                          value={formData.servicio}
                          onChange={handleChange}
                          className="w-full bg-[#050609] border border-white/5 text-xs text-slate-300 rounded-xl py-3.5 px-4 focus:outline-none focus:border-cyber-gold/50 cursor-pointer font-sans"
                        >
                          <option value="starter">Plan Starter ($350 UYU - Pago Único)</option>
                          <option value="community">Plan Community ($950 UYU - Pago Único)</option>
                          <option value="premium">Plan Premium ($3990 UYU - Pago Único)</option>
                          <option value="hosting">Hosting Mensual ($300 UYU/mes)</option>
                          <option value="custom">Bot Personalizado a Medida</option>
                        </select>
                      </div>
                    </div>

                    {/* Message description text */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#00e5ff] mb-1.5 ml-1">
                        Especificaciones del Bot
                      </label>
                      <textarea
                        name="mensaje"
                        required
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Detalla qué funciones esperas que cumpla tu bot Discord o especificaciones..."
                        className="w-full bg-[#050609]/60 border border-white/5 text-xs text-white rounded-xl p-4 focus:outline-none focus:border-cyber-cyan/50 placeholder-slate-600 transition-all font-sans leading-relaxed resize-none"
                      />
                    </div>

                    {/* Submit Touch Buttons Area stacked on mobile */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                      {/* Form standard submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-cyan hover:to-[#bd00ff] text-[#050609] hover:text-white font-extrabold rounded-xl transition-all shadow-md active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-2 h-14 select-none cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Procesando..." : "Enviar Formulario"}</span>
                      </button>

                      {/* Immediate WhatsApp send helper */}
                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="w-full py-4 bg-[#141622] hover:bg-slate-900 border border-white/5 hover:border-cyber-green/40 hover:text-cyber-green text-slate-300 font-bold rounded-xl transition-all active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-2 h-14 select-none cursor-pointer"
                      >
                        <Phone className="w-4 h-4 text-cyber-green" />
                        <span>Enviar por WhatsApp</span>
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-overlay"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green mb-2 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight uppercase">
                        ¡Transmisión Enviada!
                      </h4>
                      <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                        Excelente, <b className="text-white">{formData.nombre}</b>. Hemos registrado tu interés en el sistema de redes de NovaCore para el bot de Discord.
                      </p>
                    </div>

                    <div className="p-4 bg-[#050609] rounded-xl border border-white/5 font-mono text-[10px] text-slate-400 max-w-sm space-y-2 text-left">
                      <div>
                        &gt; STATUS: <span className="text-cyber-green">TRANSMITTED_SUCCESSFULLY</span>
                      </div>
                      <div>
                        &gt; RESPONDING_WINDOW: <span className="text-[#ffd700]">&lt; 1 HOUR VIA EMAIL</span>
                      </div>
                      <div>
                        &gt; EMAIL: <span className="text-slate-200">{formData.email}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs justify-center pt-4">
                      <button
                        onClick={handleReset}
                        className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs uppercase tracking-wider font-mono border border-white/5 transition-all select-none cursor-pointer h-11"
                      >
                        Nuevo Mensaje
                      </button>
                      <button
                        onClick={handleWhatsAppSend}
                        className="py-3 px-6 bg-cyber-green text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all select-none cursor-pointer h-11 flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" /> Abrir WhatsApp
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
