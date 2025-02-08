import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Abhi-sh4rma',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abhishek-sharma-291a42250/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:sanhishek72@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/abhi.sh4rma/', // Change this to your Instagram profile
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                Abhishek Sharma
              </h3>
              <p className="text-gray-400 text-center">Data Science Student</p>
            </div>
            
            <div className="flex space-x-6 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Abhishek Sharma. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
