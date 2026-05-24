import { Plan, PlanType, FeatureItem } from "../types";

export const PLANS_DATA: Plan[] = [
  {
    id: PlanType.STARTER,
    name: "Plan Starter",
    price: 350,
    currency: "UYU",
    billing: "pago único",
    description: "Configuración esencial para servidores pequeños o medianos que buscan excelencia.",
    features: [
      "Moderación automática",
      "Tickets de soporte",
      "Filtros Anti spam avanzado",
      "Logs detallados de canal",
      "Configuración inicial incluida"
    ],
    colorClass: "text-cyber-blue",
    glowClass: "glow-blue",
    iconName: "ShieldAlert"
  },
  {
    id: PlanType.COMMUNITY,
    name: "Plan Community",
    price: 950,
    currency: "UYU",
    billing: "pago único",
    description: "Impulsa tu comunidad con sistemas de retención, automatización y juego sano.",
    features: [
      "Sistema de XP y niveles",
      "AutoRoles interactivos",
      "Gestor de sorteos avanzados",
      "Dashboard web básico",
      "Multi-comandos personalizados"
    ],
    colorClass: "text-cyber-purple",
    glowClass: "glow-purple",
    badgeText: "Recomendado",
    iconName: "Users"
  },
  {
    id: PlanType.PREMIUM,
    name: "Plan Premium",
    price: 3990,
    currency: "UYU",
    billing: "pago único",
    description: "La joya de la corona. Inteligencia Artificial integrada y capacidades ilimitadas.",
    features: [
      "Inteligencia Artificial integrada (Gemini)",
      "Dashboard web avanzado + Stats",
      "Integración con APIs externas",
      "Hosting premium incluido por 1 año",
      "Seguridad y Anti-Raid avanzada"
    ],
    colorClass: "text-cyber-gold",
    glowClass: "glow-gold",
    badgeText: "Elite",
    iconName: "Zap"
  },
  {
    id: PlanType.HOSTING,
    name: "Hosting Bots",
    price: 300,
    currency: "UYU",
    billing: "/ mes",
    description: "Dale vida eterna a tu propio bot con nuestra infraestructura cloud y baja latencia.",
    features: [
      "Online 24/7 garantizado (Uptime 99.9%)",
      "Sistemas de reinicio automático",
      "Monitoreo en tiempo real de recursos",
      "Soporte técnico directo de ingenieros",
      "Protección anti-ataques DDoS"
    ],
    colorClass: "text-cyber-green",
    glowClass: "glow-green",
    iconName: "Server"
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "seguididad",
    title: "Seguridad Avanzada",
    description: "Algoritmos avanzados para filtrar ataques, links maliciosos y bots invasores automáticamente.",
    iconName: "ShieldCheck",
    badge: "Estricto"
  },
  {
    id: "ia",
    title: "IA Integrada",
    description: "Modelos neuronales avanzados integrados para responder comandos, moderar por intención y responder chats.",
    iconName: "Sparkles",
    badge: "Neural"
  },
  {
    id: "hosting",
    title: "Hosting 24/7",
    description: "Servidores virtuales ultra rápidos operando sin interrupción, garantizando latencias mínimas.",
    iconName: "Cpu",
    badge: "99.9% Uptime"
  },
  {
    id: "actualizaciones",
    title: "Actualizaciones Continuas",
    description: "Modificamos y optimizamos características de forma remota sin interrupciones en tu servidor.",
    iconName: "RefreshCw",
    badge: "Auto"
  },
  {
    id: "personalizados",
    title: "Sistemas Personalizados",
    description: "Ideamos e implementamos comandos específicos que tu marca o comunidad privada requiera.",
    iconName: "Compass",
    badge: "Exclusivo"
  },
  {
    id: "anti-raid",
    title: "Protección Anti-Raid",
    description: "Bloqueos inmediatos en milisegundos cuando detecta patrones sospechosos o ataques coordinados de spam.",
    iconName: "Ban",
    badge: "Activo"
  },
  {
    id: "soporte",
    title: "Soporte Rápido",
    description: "Tickets prioritarios y atención técnica personalizada vía WhatsApp o Discord a toda hora.",
    iconName: "Headphones",
    badge: "24h"
  }
];
