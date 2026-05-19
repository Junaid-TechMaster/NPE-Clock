import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { Star } from 'lucide-react';
import SEO from '../components/SEO';

const aboutData = {
  intro: {
    title: 'Our Heritage & Introduction',
    text: 'We are New Precision Engineering, formerly Pioneer Watch Co., master horologists dealing in monumental tower clocks and customized wall clocks since 1940. We employ highly trained professionals and designers who deeply understand our clients\' architectural requirements. We deliver these masterpieces alongside trouble-free installation, offering quick and economical maintenance. If you want your building to stand apart, commission the right tower clock. Because true craftsmanship is inherently classy.',
    image: 'https://images.unsplash.com/photo-1583485088034-607f320ea314?auto=format&fit=crop&q=80',
  },
  mission: {
    title: 'Our Core Mission',
    text: 'Our mission is absolute precision. We strive to provide our customers with exactly what they envision, precisely when they need it, delivering the finest, reliable, top-quality products accompanied by defect-free, highly responsive services. We are a growth-oriented company that succeeds through rigorous teamwork and continuous improvement, ensuring we treat every client and employee with the highest respect and care.',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80',
  },
  vision: {
    title: 'Our Global Vision',
    text: 'It is our ultimate vision to lead the Tower Clock Business across the world. We aim to achieve this by consistently applying our engineering prowess to transform ordinary buildings into extraordinary, unforgettable architectural landmarks that stand the test of time for generations to come.',
    image: 'https://images.unsplash.com/photo-1529158062015-c64defbea271?auto=format&fit=crop&q=80',
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="pt-28 pb-24 px-4 md:px-12 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <SEO title="About Us" description="Learn about the history, mission, and vision of New Precision Engineering." />
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Est. 1940</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold dark:text-white text-gray-900 mb-8">Who We Are</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['intro', 'mission', 'vision'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${
                  activeTab === tab
                    ? 'bg-[#EAB308] text-white shadow-xl scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden transition-colors duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className="relative z-10 order-2 md:order-1">
                <Star className="absolute -top-8 -left-8 text-[#F3ECE4] dark:text-gray-700 w-28 h-28 opacity-30 pointer-events-none" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#EAB308] uppercase tracking-widest leading-tight">
                  {aboutData[activeTab].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-loose text-base md:text-lg font-light">
                  {aboutData[activeTab].text}
                </p>
              </div>
              <div className="h-64 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                <img
                  src={aboutData[activeTab].image}
                  alt={aboutData[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {[
            { value: '1940', label: 'Founded' },
            { value: '80+', label: 'Years Active' },
            { value: '200+', label: 'Major Projects' },
            { value: '2', label: 'Global Awards' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, rotateX: -5, rotateY: 7, transition: { duration: 0.25 } }}
              style={{ transformPerspective: 700 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center shadow border border-gray-100 dark:border-gray-700 cursor-default"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#EAB308]">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
