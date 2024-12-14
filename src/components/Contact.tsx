import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail />}
              title="Email"
              content="contact@example.com"
            />
            <ContactInfo
              icon={<Phone />}
              title="Phone"
              content="+1 (555) 123-4567"
            />
            <ContactInfo
              icon={<MapPin />}
              title="Location"
              content="San Francisco, CA"
            />
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="p-3 bg-gray-800 rounded-lg text-cyan-400">{icon}</div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="mt-1 text-gray-400">{content}</p>
      </div>
    </div>
  );
}