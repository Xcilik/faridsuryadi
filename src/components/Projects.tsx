import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cloud-based project management system built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/faridsuryadi',
    demo: 'https://example.com',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Real-time data visualization platform for business intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/faridsuryadi',
    demo: 'https://example.com',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
  },
  {
    title: 'Smart IoT Platform',
    description: 'IoT device management and monitoring system',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/faridsuryadi',
    demo: 'https://example.com',
    tags: ['React', 'TypeScript', 'MQTT', 'Docker'],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-cyan-400"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-cyan-400"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
