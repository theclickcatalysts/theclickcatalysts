import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaUsers, FaTools, FaAward } from 'react-icons/fa';

const stats = [
  {
    count: 50,
    label: 'Completed Projects',
    icon: <FaProjectDiagram className="text-4xl" />,
    suffix: '+',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    count: 20,
    label: 'Satisfied Clients',
    icon: <FaUsers className="text-4xl" />,
    suffix: '+',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    count: 30,
    label: 'Technology Experts',
    icon: <FaTools className="text-4xl" />,
    suffix: '+',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  // {
  //   count: 15,
  //   label: 'Industry Awards',
  //   icon: <FaAward className="text-4xl" />,
  //   suffix: '+',
  //   color: 'text-purple-600',
  //   bgColor: 'bg-purple-50',
  // },
];

const StatsCard = ({ icon, count, label, suffix, color, bgColor, inView }) => (
  <div className={`flex flex-col items-center text-center p-8 rounded-xl ${bgColor} transition-all duration-500 transform hover:scale-105 hover:shadow-lg`}>
    <div className={`p-4 rounded-full bg-white shadow-md mb-6 ${color}`}>
      {icon}
    </div>
    <h3 className="text-5xl font-bold text-gray-800 mb-2">
      {inView ? (
        <CountUp 
          end={count} 
          duration={3} 
          suffix={suffix}
          separator=","
          delay={0.2}
        />
      ) : '0'}
    </h3>
    <p className="text-lg text-gray-600 font-medium">{label}</p>
  </div>
);

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that showcase our expertise and commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatsCard 
              key={i} 
              {...stat} 
              inView={inView} 
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;