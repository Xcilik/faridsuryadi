import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-cyan-400 transition-colors"
    >
      {icon}
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <SocialLink icon={<Github />} href="https://github.com/faridsuryadi" />
      <SocialLink icon={<Linkedin />} href="https://linkedin.com" />
      <SocialLink icon={<Mail />} href="mailto:contact@example.com" />
    </div>
  );
}