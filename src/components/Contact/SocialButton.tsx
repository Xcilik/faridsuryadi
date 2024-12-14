import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

export default function SocialButton({ icon: Icon, label, href, color }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all transform hover:-translate-y-1 group ${color}`}
    >
      <Icon className="w-6 h-6" />
      <span className="font-medium">{label}</span>
    </a>
  );
}