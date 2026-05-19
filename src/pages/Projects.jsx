import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { installedProjects, projectImages } from '../data';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80';

const stats = [
  { value: '200+', label: 'Total Installations' },
  { value: '1951', label: 'First Installation' },
  { value: '2026', label: 'Latest Project' },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <section
      className="pt-28 pb-24 px-4 md:px-12 bg-[#FFFDF9] dark:bg-gray-950 transition-colors duration-300 min-h-screen"
      onMouseMove={handleMouseMove}
    >
      <SEO title="Installations" description="View our 200+ monumental clock installations across Pakistan since 1951." />

      {/* Floating image preview on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered}
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed z-50 pointer-events-none rounded-2xl overflow-hidden shadow-2xl border-2 border-[#EAB308]"
            style={{
              left: Math.min(pos.x + 24, window.innerWidth - 230),
              top: Math.max(pos.y - 90, 16),
              width: 210,
              height: 148,
            }}
          >
            <img
              src={projectImages[hovered] || DEFAULT_IMG}
              alt={hovered}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <p className="text-white text-xs font-bold leading-tight line-clamp-2">{hovered}</p>
            </div>
            {/* Yellow accent badge for projects with dedicated images */}
            {projectImages[hovered] && (
              <div className="absolute top-2 right-2 bg-[#EAB308] text-white text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded">
                Photo
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ transformPerspective: 1200 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Our Footprint</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">
            Our Installed Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A selection of monumental clocks manufactured and installed by our team across Pakistan. Hover over any project to preview it.
          </p>
        </motion.div>

        {/* Stats — 3D flip entrance */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: -4, rotateY: 6, transition: { duration: 0.25 } }}
              style={{ transformPerspective: 700 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 text-center shadow cursor-default"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#EAB308]">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1 font-bold">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Project list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-800 max-h-[680px] overflow-y-auto transition-colors duration-300"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#EAB308 transparent' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-8">
            {installedProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`flex items-start text-sm border-b border-gray-50 dark:border-gray-800 pb-2 pt-1 cursor-pointer group transition-colors duration-150 ${
                  hovered === project ? 'text-[#EAB308]' : ''
                }`}
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <MapPin
                  className={`w-3.5 h-3.5 mt-1 mr-2 flex-shrink-0 transition-colors ${
                    hovered === project ? 'text-[#EAB308]' : 'text-[#EAB308]'
                  }`}
                />
                <span className={`font-medium leading-snug transition-colors ${
                  hovered === project
                    ? 'text-[#EAB308]'
                    : 'text-gray-700 dark:text-gray-300 group-hover:text-[#EAB308] dark:group-hover:text-[#EAB308]'
                }`}>
                  {project}
                  {/* Badge for projects with real images */}
                  {projectImages[project] && (
                    <span className="ml-2 inline-block bg-[#EAB308]/10 text-[#EAB308] text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded align-middle">
                      ★
                    </span>
                  )}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4 uppercase tracking-widest">
          ★ = Projects with photo preview · Hover to reveal
        </p>
      </div>
    </section>
  );
}
