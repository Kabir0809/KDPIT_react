import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Recruiters = () => {
  const recruiters = [
    { id: 1, name: 'Recruiter 1', logo: '/images/recruiters/1.webp' },
    { id: 2, name: 'Recruiter 2', logo: '/images/recruiters/2.webp' },
    { id: 3, name: 'Recruiter 3', logo: '/images/recruiters/3.webp' },
    { id: 4, name: 'Recruiter 4', logo: '/images/recruiters/4.webp' },
    { id: 5, name: 'Recruiter 5', logo: '/images/recruiters/5.webp' },
    { id: 6, name: 'Recruiter 6', logo: '/images/recruiters/6.webp' },
    { id: 7, name: 'Recruiter 7', logo: '/images/recruiters/7.webp' },
    { id: 8, name: 'Recruiter 8', logo: '/images/recruiters/8.webp' },
    { id: 9, name: 'Recruiter 9', logo: '/images/recruiters/9.webp' },
    { id: 10, name: 'Recruiter 10', logo: '/images/recruiters/10.webp' },
    { id: 11, name: 'Recruiter 11', logo: '/images/recruiters/11.webp' },
    { id: 12, name: 'Recruiter 12', logo: '/images/recruiters/12.webp' },
    { id: 13, name: 'Recruiter 13', logo: '/images/recruiters/13.webp' },
    { id: 14, name: 'Recruiter 14', logo: '/images/recruiters/14.webp' },
    { id: 15, name: 'Recruiter 15', logo: '/images/recruiters/15.webp' },
    { id: 16, name: 'Recruiter 16', logo: '/images/recruiters/16.webp' },
    { id: 17, name: 'Recruiter 17', logo: '/images/recruiters/17.webp' },
    { id: 18, name: 'Recruiter 18', logo: '/images/recruiters/18.webp' },
    { id: 19, name: 'Recruiter 19', logo: '/images/recruiters/19.webp' }
  ];

  const placementStats = [
    { id: 1, value: 98, suffix: '%', title: 'Placement Rate' },
    { id: 2, value: 8.5, suffix: ' LPA', title: 'Average Package' },
    { id: 3, value: 24, suffix: ' LPA', title: 'Highest Package' },
    { id: 4, value: 120, suffix: '+', title: 'Companies Visited' }
  ];

  return (
    <section id="recruiters" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Major Recruiters</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our students are placed in top companies across the globe</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12" data-aos="fade-up">
          {recruiters.map((recruiter) => (
            <motion.div 
              key={recruiter.id}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="h-[100px] w-[150px] sm:w-[calc(33.333%-32px)] md:w-[calc(25%-32px)] lg:w-[calc(20%-32px)] xl:w-[calc(16.666%-32px)] bg-gray-50 rounded-lg shadow-md flex items-center justify-center p-3 overflow-hidden"
            >
              <img 
                src={recruiter.logo} 
                alt={recruiter.name} 
                className="max-w-[100%] max-h-[80px] object-contain transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placementStats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={stat.id * 100}
            >
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                <span className="text-3xl">{stat.suffix}</span>
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;