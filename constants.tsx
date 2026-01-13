
import React from 'react';
import { Briefcase, Palette, Send } from 'lucide-react';
import { LawFirmDemo } from './components/demos/LawFirmDemo';
import { ClinicDemo } from './components/demos/ClinicDemo';
import { AestheticsDemo } from './components/demos/AestheticsDemo';
import { DemoSite, Step } from './types';

export const DEMO_SITES: DemoSite[] = [
  {
    id: 'lawfirm',
    name: "Dejoss Advocacia",
    category: "Advocacia & Jurídico",
    description: "Site institucional que transmite autoridade e confiança. Ideal para escritórios de advocacia e consultoria jurídica.",
    image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2069&auto=format&fit=crop",
    component: LawFirmDemo
  },
  {
    id: 'clinic',
    name: "VitaClinic",
    category: "Saúde & Clínicas",
    description: "Design limpo e acolhedor focado na experiência do paciente, com facilidade de agendamento e apresentação do corpo clínico.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    component: ClinicDemo
  },
  {
    id: 'aesthetics',
    name: "Lumière Estética",
    category: "Estética & Beleza",
    description: "Visual luxuoso e minimalista que valoriza imagens de alta qualidade. Perfeito para clínicas de estética, spas e salões.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    component: AestheticsDemo
  }
];

export const WORKFLOW_STEPS: Step[] = [
  { 
    id: 1, 
    title: "Briefing", 
    description: "Conversamos para entender seu negócio, público-alvo e objetivos principais.", 
    icon: Briefcase 
  },
  { 
    id: 2, 
    title: "Criação", 
    description: "Desenvolvemos o layout, conteúdo e programamos o site com as melhores tecnologias.", 
    icon: Palette 
  },
  { 
    id: 3, 
    title: "Entrega", 
    description: "Entregamos seu site completo com design exclusivo, totalmente pronto para o lançamento.", 
    icon: Send 
  }
];
