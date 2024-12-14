import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className="text-gray-300 hover:text-cyan-400 transition-colors px-4 py-2 text-sm font-medium"
    >
      {children}
    </a>
  );
}