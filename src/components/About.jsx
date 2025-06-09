import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Proficient in modern web technologies and frameworks'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative approach to complex technical challenges'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication and teamwork skills'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering high-quality results'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-4 bg-gray-200 rounded-xl flex items-center justify-center text-6xl font-bold text-gray-400"
              >
                Photo
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate Full Stack Developer with a strong foundation in modern web technologies.
              My journey in software development has equipped me with expertise in both frontend and 
              backend technologies, allowing me to build comprehensive solutions from concept to deployment.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I thrive on learning new technologies and staying up-to-date with industry trends. 
              My approach combines technical excellence with creative problem-solving to deliver 
              user-centric applications that make a real impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;