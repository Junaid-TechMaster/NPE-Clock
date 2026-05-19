import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';
import SEO from '../components/SEO';
import { founders } from '../data';

export default function Legacy() {
  const [activeTab, setActiveTab] = useState(founders[0].name);

  return (
    <div className="pt-28 pb-24 px-4 md:px-12 dark:bg-gray-900 bg-[#FFFDF9] transition-colors duration-300 min-h-screen">
      <SEO title="Legacy & Awards" description="Discover the 80+ year history and global awards of New Precision Engineering." />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Since 1940</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold dark:text-white text-gray-900 mb-8">Our Legacy</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {founders.map((founder) => (
              <button
                key={founder.name}
                onClick={() => setActiveTab(founder.name)}
                className={`px-4 md:px-7 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all ${
                  activeTab === founder.name
                    ? 'bg-[#EAB308] text-white shadow-xl scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {founder.name}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden transition-colors duration-300">
            <AnimatePresence mode="wait">
              {founders.map(
                (founder) =>
                  activeTab === founder.name && (
                    <motion.div
                      key={founder.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid md:grid-cols-2 gap-8 md:gap-12 items-center text-left"
                    >
                      <div className="relative z-10 order-2 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#EAB308] uppercase tracking-widest">{founder.name}</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">{founder.era}</p>
                        <p className="text-gray-600 dark:text-gray-300 leading-loose text-base md:text-lg font-light">{founder.desc}</p>
                      </div>
                      <div className="h-64 md:h-[380px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                        <img src={founder.img} alt={founder.name} className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Awards Section */}
        <section className="py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-4xl uppercase tracking-widest font-bold text-[#EAB308]">Awards & Achievements</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                Our commitment to excellence has been recognized locally and globally for over eight decades.
              </p>
              <ul className="space-y-6 pt-2">
                <li className="flex items-start">
                  <Award className="text-[#EAB308] mt-1 mr-4 flex-shrink-0" size={26} />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wide dark:text-white">US Army Recognition (1942–1945)</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manufactured the first 24-Hour Analogue clock in all of Asia for the US Army in India.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="text-[#EAB308] mt-1 mr-4 flex-shrink-0" size={26} />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wide dark:text-white">Asia Award (1987)</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Nominated and won the prestigious international Asia Award for best performance and quality.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { bg: 'bg-[#EAB308] text-gray-900', value: '1940', label: 'Year Established', vc: '', lc: 'text-gray-900/80', shift: 'md:translate-y-8' },
                { bg: 'bg-white dark:bg-gray-800 transition-colors duration-300', value: '200+', label: 'Major Installations', vc: 'text-[#EAB308]', lc: 'text-gray-500 dark:text-gray-400', shift: '' },
                { bg: 'bg-white dark:bg-gray-800 transition-colors duration-300', value: '80+', label: 'Years of Excellence', vc: 'text-[#EAB308]', lc: 'text-gray-500 dark:text-gray-400', shift: '' },
                { bg: 'bg-gray-900 dark:bg-gray-700', value: '2', label: 'Global Awards', vc: 'text-[#EAB308]', lc: 'text-gray-300', shift: 'md:translate-y-4' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateX: -4, rotateY: 6, transition: { duration: 0.25 } }}
                  style={{ transformPerspective: 700 }}
                  className={`${s.bg} ${s.shift} p-6 md:p-8 text-center shadow-2xl cursor-default`}
                >
                  <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${s.vc}`}>{s.value}</h3>
                  <p className={`text-xs font-bold uppercase tracking-wider ${s.lc}`}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
