import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Python Projects',
      description: 'A collection of Python projects covering various problem-solving techniques and algorithms.',
      technologies: ['Python'],
      github: 'https://github.com/Abhi-Sh4rma/Python_projects',
      live: '#',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20201123152927/PythonProjects11.png',
    },
    {
      title: 'Advanced Python Projects',
      description: 'Advanced-level Python projects including automation, AI models, and data science applications.',
      technologies: ['Python'],
      github: 'https://github.com/Abhi-Sh4rma/Advandce_PYTHON_Projects',
      live: '#',
      image: 'https://clslearn.com/wp-content/uploads/2023/12/python-project-1.webp',
    },
    {
      title: 'Emotion Detection',
      description: 'Machine learning model for detecting emotions from facial expressions using Jupyter Notebook.',
      technologies: ['Jupyter Notebook', 'Python', 'Machine Learning'],
      github: 'https://github.com/Abhi-Sh4rma/Emotion_Detection-',
      live: '#',
      image: 'https://i.ytimg.com/vi/UHdrxHPRBng/sddefault.jpg',
    },
    {
      title: 'Data Analysis',
      description: 'Comprehensive data analysis projects using Pandas, NumPy, and visualization tools.',
      technologies: ['Jupyter Notebook', 'Python', 'Pandas'],
      github: 'https://github.com/Abhi-Sh4rma/DATA_Analysis',
      live: '#',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQooXHtLcFaUzwRSJUfY38rIL0vxiEIBfYDA&s',
    },
    {
      title: 'Movie Recommender System',
      description: 'A movie recommendation system using collaborative filtering and content-based techniques.',
      technologies: ['Jupyter Notebook', 'Python', 'Scikit-Learn'],
      github: 'https://github.com/Abhi-Sh4rma/Machine_learning_projects',
      live: '#',
      image: 'https://cdn.prod.website-files.com/670cbf146221ee06c3cdd761/67120d05aeb7b880cef08357_movie%20recommendation%20system.webp',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] inline-block text-transparent bg-clip-text">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            These are some of my latest projects showcasing my expertise in Python, data science, and machine learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#1e293b] rounded-2xl shadow-[0_0_50px_rgba(8,_112,_184,_0.1)] overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-[#3b82f6] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      className="flex items-center text-gray-300 hover:text-[#3b82f6] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
