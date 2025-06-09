import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      period: '2016 - 2020',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in software engineering and data structures. Completed major projects in web development and machine learning.',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Led the college coding club',
        'Won inter-college hackathon',
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Delhi Public School',
      period: '2014 - 2016',
      grade: '92%',
      description: 'Science stream with Computer Science as optional subject.',
      achievements: [
        'School topper in Computer Science',
        'Participated in national coding olympiad',
        'Head of the computer club',
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-2023-001'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-2022-045'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2022',
      credentialId: 'MDB-DEV-2022-123'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2021',
      credentialId: 'GCP-PRO-2021-789'
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
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-yellow-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-purple-600 font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Issued: {cert.date}</span>
                        <span className="font-mono bg-gray-200 px-2 py-1 rounded">
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600 text-sm">
                I believe in lifelong learning and regularly update my skills through 
                online courses, workshops, and industry conferences. Currently pursuing 
                advanced certifications in cloud architecture and DevOps practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;