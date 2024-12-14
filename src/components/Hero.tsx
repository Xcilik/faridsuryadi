import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Terminal className="inline-block w-16 h-16 mb-6 text-cyan-400" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Farid Suryadi
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full Stack Developer & IT Expert
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable applications and solving complex problems
            with modern technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink icon={<Github />} href="https://github.com" />
            <SocialLink icon={<Linkedin />} href="https://linkedin.com" />
            <SocialLink icon={<Mail />} href="mailto:contact@example.com" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
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