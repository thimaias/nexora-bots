export enum PlanType {
  STARTER = "starter",
  COMMUNITY = "community",
  PREMIUM = "premium",
  HOSTING = "hosting",
}

export interface Plan {
  id: PlanType;
  name: string;
  price: number;
  currency: string;
  billing: string;
  description: string;
  features: string[];
  colorClass: string;
  glowClass: string;
  badgeText?: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
