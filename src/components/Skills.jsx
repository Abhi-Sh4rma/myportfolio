import React from 'react';
import { Brain, Smartphone, Server, Database, Code } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      technologies: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Scikit-Learn', level: 80 },
        { name: 'Emotion Detection Systems', level: 75 },
      ],
    },
    {
      category: 'Web Development',
      icon: <Server className="w-6 h-6 text-blue-600" />,
      technologies: [
        { name: 'Django', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      category: 'App Development',
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      technologies: [
        { name: 'Flutter', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'Dart', level: 70 },
      ],
    },
    {
      category: 'Games & Python Projects',
      icon: <Code className="w-6 h-6 text-pink-600" />,
      technologies: [
        { name: 'Python Games', level: 85 },
        { name: 'Movie Recommendation Systems', level: 80 },
      ],
    },
    {
      category: 'Database & Cloud',
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      technologies: [
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I specialize in AI/ML development, building intelligent applications and games, and creating mobile solutions with Flutter and Firebase.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(131,_24,_67,_0.07)] hover:shadow-[0_0_50px_rgba(131,_24,_67,_0.1)] transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gray-50">{skill.icon}</div>
                <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                      <span className="text-gray-500">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
