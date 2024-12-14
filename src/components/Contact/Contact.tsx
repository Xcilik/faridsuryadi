import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Globe,
} from 'lucide-react';
import SocialButton from './SocialButton';

const socialLinks = [
  {
    icon: Github,
    label: 'Follow on GitHub',
    href: 'https://github.com/faridsuryadi',
    color: 'text-white hover:text-gray-200',
  },
  {
    icon: Linkedin,
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/farid-suryadi-183aa2341/',
    color: 'text-blue-400 hover:text-blue-300',
  },
  {
    icon: Twitter,
    label: 'Follow on Twitter',
    href: 'https://twitter.com/faridsuryadi',
    color: 'text-sky-400 hover:text-sky-300',
  },
  {
    icon: Instagram,
    label: 'Follow on Instagram',
    href: 'https://instagram.com/faridsuryadi',
    color: 'text-pink-400 hover:text-pink-300',
  },
  {
    icon: Youtube,
    label: 'Subscribe on YouTube',
    href: 'https://youtube.com/faridsuryadi',
    color: 'text-red-500 hover:text-red-400',
  },
  {
    icon: Globe,
    label: 'Visit Website',
    href: 'https://faridsuryadi.tiunusia.com',
    color: 'text-emerald-400 hover:text-emerald-300',
  },
  {
    icon: Mail,
    label: 'Send an Email',
    href: 'mailto:geryandgrey@gmail.com',
    color: 'text-yellow-400 hover:text-yellow-300',
  },
];

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always excited to connect with fellow developers and tech enthusiasts!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((social, index) => (
            <SocialButton
              key={index}
              icon={social.icon}
              label={social.label}
              href={social.href}
              color={social.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
