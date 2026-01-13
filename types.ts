
// Import React to resolve the 'Cannot find namespace React' error when using React.FC
import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface DemoSite {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  component: React.FC;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}