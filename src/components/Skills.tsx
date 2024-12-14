import React from 'react';
import { Code2, Database, Globe, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    technologies: ['Node.js', 'Python', 'Java', 'Express', 'FastAPI'],
  },
  {
    category: 'Database',
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'DevOps',
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white ml-3">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}