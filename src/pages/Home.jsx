import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Award,
  Star,
} from 'lucide-react';
import SEO from '../components/SEO';
import {
  products,
  featuredProjects,
  testimonials,
  towerClockImage,
  towerClockImage2,
  FlowerClockImage,
  Herosectionimage,
} from '../data';
import { staggerContainer } from '../utils/animations';

const heroSlides = [
  { image: towerClockImage,  title: 'Engineering Clocks',    subtitle: 'Leading the Tower Clock Business in the World since 1940.' },
  { image: FlowerClockImage, title: 'Bespoke Design',        subtitle: 'Custom designed to your exact specifications and architectural requirements.' },
  { image: Herosectionimage, title: 'Custom Engineering',    subtitle: 'Where mechanical mastery meets architectural elegance.' },
  { image: towerClockImage2, title: 'Custom Tower Clocks',   subtitle: 'Turn your ordinary building into an extraordinary landmark.' },
];

// ── Hero Slider ────────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % heroSlides.length);
  const prev = () => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <img src={heroSlides[current].image} alt="Hero" className="w-full h-full object-cover opacity-70" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        {/* 3D title entrance */}
        <motion.h1
          key={`t-${current}`}
          initial={{ opacity: 0, rotateX: 35, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          style={{ transformPerspective: 1200 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-widest mb-4 md:mb-6 drop-shadow-lg leading-tight"
        >
          {heroSlides[current].title}
        </motion.h1>

        <motion.p
          key={`s-${current}`}
          initial={{ opacity: 0, y: 24, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          style={{ transformPerspective: 1200 }}
          className="text-base md:text-xl text-gray-200 max-w-2xl font-light mb-8 md:mb-10 drop-shadow-md px-4"
        >
          {heroSlides[current].subtitle}
        </motion.p>

        <motion.div
          key={`b-${current}`}
          initial={{ opacity: 0, y: 16, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          style={{ transformPerspective: 1200 }}
          whileHover={{ scale: 1.05, rotateX: -4, transition: { duration: 0.2 } }}
        >
          <Link to="/contact" className="bg-[#EAB308] text-white px-8 md:px-10 py-3 md:py-4 uppercase tracking-widest font-bold hover:bg-yellow-600 transition shadow-lg text-sm inline-block">
            Contact Us
          </Link>
        </motion.div>
      </div>

      <button onClick={prev} className="absolute left-3 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#EAB308] transition z-20">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-3 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#EAB308] transition z-20">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`transition-all rounded-full ${i === current ? 'bg-[#EAB308] w-6 h-2' : 'bg-white/50 w-2 h-2'}`} />
        ))}
      </div>
    </section>
  );
}

// ── Featured Products (3 cards — 3D tilt on hover) ────────────────────────────
function FeaturedProducts() {
  return (
    <section className="py-20 md:py-24 px-3 sm:px-6 md:px-12 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 20 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ transformPerspective: 1200 }}
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Our Craft</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-10 md:mb-12">
            Featured Craftsmanship
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ rotateX: -5, rotateY: 7, scale: 1.03, boxShadow: '0 0 30px rgba(234,179,8,0.55), 0 12px 40px rgba(0,0,0,0.35)', transition: { duration: 0.3, ease: 'easeOut' } }}
              style={{ transformPerspective: 800 }}
              className="group relative h-80 md:h-96 overflow-hidden cursor-pointer shadow-lg bg-gray-100 dark:bg-gray-800"
            >
              <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 md:p-8 flex flex-col justify-center text-center">
                <h3 className="text-[#EAB308] text-xl uppercase tracking-wider font-bold mb-3">{product.title}</h3>
                <p className="text-white text-sm leading-relaxed">{product.desc}</p>
                <Link to="/products" className="mt-5 inline-block text-white border-b border-white hover:text-[#EAB308] hover:border-[#EAB308] transition w-max mx-auto text-xs uppercase tracking-widest pb-1">
                  Read More
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-lg uppercase tracking-widest font-bold text-left">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <Link to="/products" className="border-b-2 border-[#EAB308] pb-1 text-gray-900 dark:text-white uppercase tracking-widest font-bold hover:text-[#EAB308] dark:hover:text-[#EAB308] transition text-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Projects Carousel (image left, details right) ─────────────────────────────
function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => { setDir(1); setCurrent((p) => (p + 1) % featuredProjects.length); };
  const prev = () => { setDir(-1); setCurrent((p) => (p - 1 + featuredProjects.length) % featuredProjects.length); };

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const project = featuredProjects[current];

  return (
    <section className="px-3 sm:px-6 md:px-12 bg-gray-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ transformPerspective: 1200 }}
          className="text-center pt-16 md:pt-20 px-4"
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">80+ Years of Installations</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-white mb-2">Our Landmark Projects</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2 mb-8 md:mb-12">
            From civic centers to campuses — our monumental clocks define communities across Pakistan.
          </p>
        </motion.div>

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60, rotateY: dir * 12 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: dir * -60, rotateY: dir * -12 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{ transformPerspective: 1000 }}
            className="flex flex-col md:flex-row"
          >
            {/* Image — left / top on mobile */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[500px] overflow-hidden flex-shrink-0">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Details — right / bottom on mobile */}
            <div className="w-full md:w-1/2 bg-gray-800 dark:bg-gray-900 p-6 sm:p-8 md:p-14 flex flex-col justify-center">
              <span className="text-[#EAB308] text-xs font-bold uppercase tracking-widest mb-3">Featured Installation</span>
              <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-2 leading-tight">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-2 mb-5">
                <p className="flex items-center text-gray-400 text-sm">
                  <MapPin size={13} className="mr-1 text-[#EAB308]" /> {project.location}
                </p>
                <span className="text-[#EAB308] font-bold text-sm">{project.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
                {project.description}
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link to="/projects" className="w-max border border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white px-6 py-3 uppercase tracking-widest text-xs font-bold transition-colors duration-300 inline-block">
                  View All Installations
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation bar */}
        <div className="flex items-center justify-between px-4 md:px-8 py-5 bg-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-2">
            {featuredProjects.map((_, i) => (
              <button key={i} onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all rounded-full ${i === current ? 'bg-[#EAB308] w-6 h-2' : 'bg-gray-600 w-2 h-2 hover:bg-gray-400'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">
              <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span> / {String(featuredProjects.length).padStart(2, '0')}
            </span>
            <button onClick={prev} className="w-9 h-9 bg-gray-700 hover:bg-[#EAB308] text-white rounded-full flex items-center justify-center transition">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="w-9 h-9 bg-gray-700 hover:bg-[#EAB308] text-white rounded-full flex items-center justify-center transition">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Awards & Installations ────────────────────────────────────────────────────
function AwardsInstallations() {
  const statsData = [
    { value: '1940', label: 'Founded' },
    { value: '80+', label: 'Years Active' },
    { value: '200+', label: 'Installations' },
    { value: '2', label: 'Global Awards' },
  ];

  return (
    <section className="py-20 md:py-24 px-3 sm:px-6 md:px-12 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 20 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ transformPerspective: 1200 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Recognition & Reach</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white">
            Awards &amp; Installations
          </h2>
        </motion.div>

        {/* Stats strip — 3D flip entrance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statsData.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, rotateX: -5, rotateY: 8, boxShadow: '0 0 22px rgba(234,179,8,0.45), 0 8px 24px rgba(0,0,0,0.12)', transition: { duration: 0.25 } }}
              style={{ transformPerspective: 700 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 text-center shadow border border-gray-100 dark:border-gray-700 cursor-default"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#EAB308]">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1 font-bold">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              bg: "bg-[url('https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80')]",
              title: 'Awards &\nLegacy',
              icon: <Award className="text-[#EAB308] w-10 h-10 mx-auto mb-3" />,
              desc: 'From providing the first 24-Hour Analogue clock to the US Army (1942), to winning the prestigious Asia Award (1987).',
              link: '/legacy', linkLabel: 'View History',
            },
            {
              bg: "bg-[url('https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80')]",
              title: 'Our\nInstallations',
              icon: <MapPin className="text-[#EAB308] w-10 h-10 mx-auto mb-3" />,
              desc: '200+ Monumental Timepieces installed across civic centers, universities, and hospitals since 1951. See our footprint.',
              link: '/projects', linkLabel: 'View Locations',
            },
          ].map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: i === 0 ? -20 : 20, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateX: -3, rotateY: i === 0 ? 4 : -4, boxShadow: '0 0 34px rgba(234,179,8,0.55), 0 14px 44px rgba(0,0,0,0.4)', transition: { duration: 0.3 } }}
              style={{ transformPerspective: 900 }}
              className={`group relative h-64 md:h-80 overflow-hidden cursor-pointer shadow-xl ${panel.bg} bg-cover bg-center`}
            >
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/0 transition duration-500" />
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-3xl md:text-4xl uppercase tracking-widest font-bold drop-shadow-lg text-center leading-tight whitespace-pre-line">
                  {panel.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 md:p-8 flex flex-col justify-center text-center">
                {panel.icon}
                <p className="text-white text-sm md:text-lg leading-relaxed mb-5">{panel.desc}</p>
                <Link to={panel.link} className="inline-block text-white border-b border-white hover:text-[#EAB308] hover:border-[#EAB308] transition w-max mx-auto text-xs uppercase tracking-widest pb-1">
                  {panel.linkLabel}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-24 px-3 sm:px-6 md:px-12 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 20 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ transformPerspective: 1200 }}
          className="text-center mb-12"
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Client Stories</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24, rotateX: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, rotateX: -10, scale: 0.97 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{ transformPerspective: 1000 }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.008, boxShadow: '0 0 24px rgba(234,179,8,0.3), 0 8px 28px rgba(0,0,0,0.1)', transition: { duration: 0.3 } }}
              className="bg-[#FFFDF9] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-8 md:p-14 shadow-xl text-center cursor-default"
            >
              <div className="text-[#EAB308] text-7xl md:text-8xl font-serif leading-none mb-4 opacity-25 select-none">&ldquo;</div>
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#EAB308] fill-[#EAB308]" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl leading-relaxed font-light max-w-3xl mx-auto mb-8">
                {t.quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EAB308] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#EAB308] hover:text-[#EAB308] dark:text-white flex items-center justify-center transition">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`transition-all rounded-full ${i === current ? 'bg-[#EAB308] w-6 h-2' : 'bg-gray-200 dark:bg-gray-700 w-2 h-2'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#EAB308] hover:text-[#EAB308] dark:text-white flex items-center justify-center transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ──────────────────────────────────────────────────────────────
function HomeContact() {
  return (
    <section className="py-20 md:py-24 px-3 sm:px-6 md:px-12 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, rotateX: 20, y: 20 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ transformPerspective: 1200 }}
        className="max-w-7xl mx-auto text-center mb-10 md:mb-12"
      >
        <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Let's Build Together</p>
        <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">Craft Your Legacy</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          Connect with our master horologists to design a bespoke timepiece that defines your architectural space.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        style={{ transformPerspective: 1200 }}
        className="max-w-5xl mx-auto bg-gray-900 dark:bg-black shadow-2xl overflow-hidden flex flex-col md:flex-row w-full border border-gray-800"
      >
        <div className="md:w-2/5 bg-gray-800 p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-700">
          <h3 className="text-xl md:text-3xl uppercase tracking-widest font-bold mb-4 text-[#EAB308]">
            Precision Engineering &amp; Timeless Craftsmanship
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed text-sm">
            For over eight decades, we have blended mechanical mastery with architectural elegance. Our dedicated team handles every detail — from custom gear manufacturing to flawless on-site installation.
          </p>
          <div className="space-y-3 text-sm font-medium text-gray-300">
            <p className="flex items-center"><MapPin className="mr-3 w-5 h-5 text-[#EAB308] flex-shrink-0" /> Global Architectural Integration</p>
            <p className="flex items-center"><Clock className="mr-3 w-5 h-5 text-[#EAB308] flex-shrink-0" /> Lifetime Horological Support</p>
          </div>
        </div>

        <div className="md:w-3/5 p-6 sm:p-8 md:p-10 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300">
          <form action="https://formspree.io/f/xdabypko" method="POST" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                <input type="text" name="firstName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                <input type="text" name="lastName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Interested In</label>
              <select name="clockType" className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent text-gray-700 dark:text-gray-300 text-sm">
                <option value="Tower Clock" className="bg-white dark:bg-gray-900">Tower Clock</option>
                <option value="Floral Garden Clock" className="bg-white dark:bg-gray-900">Floral Garden Clock</option>
                <option value="Skeleton Dial Clock" className="bg-white dark:bg-gray-900">Skeleton Dial Clock</option>
                <option value="Custom/Bespoke" className="bg-white dark:bg-gray-900">Other / Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Project Requirements</label>
              <textarea name="message" rows="4" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent resize-none dark:text-white text-sm" />
            </div>
            <button type="submit" className="w-full bg-[#EAB308] text-white py-4 font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors duration-300 text-sm">
              Submit Inquiry
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

// ── Home (composed) ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="dark:bg-gray-950 transition-colors duration-300">
      <SEO title="Home" description="Leading the Tower Clock Business in the World since 1940. 200+ architectural timepieces, monument clocks, and floral garden clocks installed across Pakistan." />
      <HeroSlider />
      <FeaturedProducts />
      <ProjectsCarousel />
      <AwardsInstallations />
      <Testimonials />
      <HomeContact />
    </div>
  );
}
