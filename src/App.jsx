import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Menu, X, Award, Clock, Star, MapPin, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

// --- IMPORT YOUR LOCAL IMAGES ---
import towerClockImage from './images/image1.png';
import FlowerClockImage from './images/image3.png';
import MonumentalClockImage from './images/image4.jpg';
import IntelligentClockImage from './images/image5.png';
import SkeletonClockImage from './images/image6.jpg';
import Herosectionimage from './images/image7.png';
import towerClockImage2 from './images/image2.png';
import Legacyimage1 from './images/image8.png';

// --- CUSTOM BRAND ICONS ---
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
);
const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// --- BUSINESS DATA ---
const products = [
  { title: 'Tower Clocks', desc: 'Completed several historic projects since 1940. Custom designed to your specifications and requirements.', img: towerClockImage },
  { title: 'Bracket Clocks', desc: 'Exterior clocks with 4 dials, illuminated from inside. Suspended or installed on building corners.', img: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80' },
  { title: 'Marker & Silhouette', desc: 'Halo lit clocks without a face or frame. LED backlighting creates a stunning wall projection at night.', img: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80' },
  { title: 'Skeleton Dial Clocks', desc: 'Ranging from 5ft to 20ft. Transparent background where your mounting surface becomes the backdrop.', img: SkeletonClockImage },
  { title: 'Floral Garden Clocks', desc: 'Landscape clocks acting as the colorful centerpiece of parks, universities, and road sideways.', img: FlowerClockImage },
  { title: 'Monumental Clocks', desc: '3ft to 20ft masterpieces designed to turn public places, churches, and malls into landmarks.', img: MonumentalClockImage },
  { title: 'Canister (Drum) Clocks', desc: 'Waterproof, aluminum-built clocks with customizable RGB backlighting. Ideal for towers and shafts.', img: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80' },
  { title: 'Intelligent & Custom Clocks', desc: 'Speedo meters parts, analogue meters for automobiles, and fully bespoke timepieces.', img: IntelligentClockImage }
];

const founders = [
  { 
    name: 'Waheed-ud-din (Late)', 
    era: 'Founder (1940s - 1985)', 
    desc: 'Built the foundation from scraps as Pioneer Watch Co. Secured the US Army contract for the first 24-hour analogue clock in Asia in 1942. Invented the famous Salat Clock.',
    img: Legacyimage1 // Placeholder historical image
  },
  { 
    name: 'Nasir-ud-din (Late)', 
    era: 'Managing Director (1985 - 2008)', 
    desc: 'Joined the business in 1985, rebranding it to New Precision Engineering. Oversaw major expansions and continued the legacy until his unfortunate passing in 2008.',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80' // Placeholder historical image
  },
  { 
    name: 'Sami-ud-din', 
    era: 'Current Managing Director', 
    desc: 'Took responsibility at a young age. Expanded the business to the Middle East and other Asian countries, utilizing globalization to achieve competitive advantage.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80' // Placeholder modern image
  }
];

const installedProjects = [
  "Punjab Civil Secretariat Lahore (1951)", "Fatima Jinnah Medical College Lahore (1952)", "T.B HOSPITAL Sargodha (1953)",
  "Mayo Hospital Lahore (1954)", "Samli Sanatorium Murree (1954)", "Nishtar Medical College Multan (1963)",
  "Bagh Masjid, Mardan Striking Clock (1965)", "Champion Clock Co. Faisalabad (1980)", "Government College (GC) Lahore (1983)",
  "Millat Town Faisalabad (1983)", "G.H.Q Rawalpindi (1984)", "G.T.S Bus Stand Masjid Rawalpindi (1984)",
  "Ghanta Ghar Sialkot (1985)", "Sheikh Zayed Hospital Lahore (1985)", "Municipal Committee Jahania (1985)",
  "PAK SAUDIA Fertilizer Masjid (1986)", "Islamia College Peshawar (1987)", "Bata Shop Chakwal (1987)",
  "Sharah-e-Quaid-e-Azam, Lahore (1988)", "Peshawar University (1990)", "Municipal Committee Gujranwala (1991)",
  "PMG Building Lahore (1992)", "Union Bank Defense Branch Lahore (1995)", "Rahimyar Khan Municipal Committee (1998)",
  "Baharia Town Islamabad (2007)", "Valencia Town Lahore (2020)", "Nishat College of Science Multan (2021)",
  "Clock Tower The Food Bazaar Karachi (2020)", "Faisal Pharma DG Khan (2021)", "Korangi Road Karachi (2021)",
  "New Metro City Sarai Alamgir (2021)", "Sardar Qalat Barthi (2022)", "Faisal Hills Islamabad (2022)",
  "NUST EME Islamabad (2022)", "Bank Chowk District Bahawalpur (2022)", "M.Hussain Shaheed Garrison (2022)",
  "Ammar Shaheed Chowk Rawalpindi (2023)", "Alnoor Orchard Lahore (2023)", "Asghar Ali Khan Academy Burewala (2023)",
  "Central Park Lahore (2024)", "New Metro City Mandi Bahauddin (2024)"
];

// --- REUSABLE COMPONENTS ---
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

// Dynamic SEO Component
const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title === 'Home' ? 'New Precision Engineering' : `${title} | New Precision Engineering`}</title>
    <meta name="description" content={description} />
  </Helmet>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ==========================================
// PAGE COMPONENTS
// ==========================================

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    { image: towerClockImage, title: 'ENGINEERING CLOCKS', subtitle: 'Leading the Tower Clock Business in the World since 1940.' },
    { image: FlowerClockImage, title: 'BESPOKE DESIGN', subtitle: 'Custom designed to your exact specifications and architectural requirements.' },
    { image: Herosectionimage, title: 'Custom Engineering DESIGN', subtitle: 'Custom designed to your exact specifications and architectural requirements.' },
    { image: towerClockImage2, title: 'Custom Tower Clocks', subtitle: 'Turn your ordinary building into an extraordinary landmark.' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1)); 
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="dark:bg-gray-950 transition-colors duration-300">
      <SEO title="Home" description="Leading the Tower Clock Business in the World since 1940. Custom architectural timepieces, monument clocks, and floral garden clocks." />
      
      {/* HERO SLIDER */}
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        <AnimatePresence mode='wait'>
          <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
            <img src={heroSlides[currentSlide].image} alt="Hero" className="w-full h-full object-cover opacity-70" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <motion.h1 key={`title-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p key={`subtitle-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-gray-200 max-w-2xl font-light mb-10 drop-shadow-md">
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.div key={`btn-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Link to="/contact" className="bg-[#EAB308] text-white px-10 py-4 uppercase tracking-widest font-bold hover:bg-yellow-600 transition shadow-lg text-sm">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#EAB308] transition z-20"><ChevronLeft size={32} /></button>
        <button onClick={nextSlide} className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#EAB308] transition z-20"><ChevronRight size={32} /></button>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-12">Featured Craftsmanship</h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative h-96 rounded-none overflow-hidden cursor-pointer shadow-lg bg-gray-100 dark:bg-gray-800">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-8 flex flex-col justify-center text-center">
                  <h3 className="text-[#EAB308] text-2xl uppercase tracking-wider font-bold mb-4">{product.title}</h3>
                  <p className="text-white text-md leading-relaxed">{product.desc}</p>
                  <Link to="/products" className="mt-6 inline-block text-white border-b border-white hover:text-[#EAB308] hover:border-[#EAB308] transition w-max mx-auto text-sm uppercase tracking-widest pb-1">Read More</Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-xl uppercase tracking-widest font-bold text-left">{product.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12">
            <Link to="/products" className="border-b-2 border-[#EAB308] pb-1 text-gray-900 dark:text-white uppercase tracking-widest font-bold hover:text-[#EAB308] dark:hover:text-[#EAB308] transition">View All Products</Link>
          </div>
        </div>
      </section>

      {/* AWARDS & INSTALLATIONS PREVIEW */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="group relative h-80 overflow-hidden cursor-pointer shadow-xl bg-[url('https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-4xl uppercase tracking-widest font-bold drop-shadow-lg text-center">Awards &<br/>Legacy</h3>
              </div>
              <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-8 flex flex-col justify-center text-center">
                  <Award className="text-[#EAB308] w-12 h-12 mx-auto mb-4" />
                  <p className="text-white text-lg leading-relaxed mb-6">Recognized globally. From providing the first 24-Hour Analogue clock to the US Army (1942), to winning the prestigious Asia Award (1987).</p>
                  <Link to="/legacy" className="inline-block text-white border-b border-white hover:text-[#EAB308] hover:border-[#EAB308] transition w-max mx-auto text-sm uppercase tracking-widest pb-1">View History</Link>
              </div>
            </div>

            <div className="group relative h-80 overflow-hidden cursor-pointer shadow-xl bg-[url('https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-4xl uppercase tracking-widest font-bold drop-shadow-lg text-center">Our<br/>Installations</h3>
              </div>
              <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-8 flex flex-col justify-center text-center">
                  <MapPin className="text-[#EAB308] w-12 h-12 mx-auto mb-4" />
                  <p className="text-white text-lg leading-relaxed mb-6">40+ Monumental Timepieces installed across civic centers, universities, and hospitals since 1951. See our footprint.</p>
                  <Link to="/projects" className="inline-block text-white border-b border-white hover:text-[#EAB308] hover:border-[#EAB308] transition w-max mx-auto text-sm uppercase tracking-widest pb-1">View Locations</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM HOMEPAGE */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">Craft Your Legacy</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">Connect with our master horologists to design a bespoke timepiece that defines your architectural space.</p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gray-900 dark:bg-black shadow-2xl overflow-hidden flex flex-col md:flex-row w-full transition-colors duration-300 rounded-none border border-gray-800">
          
          <div className="md:w-2/5 bg-gray-800 p-10 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-700">
            <h3 className="text-3xl uppercase tracking-widest font-bold mb-4 text-[#EAB308]">Precision Engineering & Timeless Craftsmanship</h3>
            <p className="text-white/80 mb-8 leading-relaxed">For over eight decades, we have blended mechanical mastery with architectural elegance. Our dedicated team handles every detail—from custom gear manufacturing to flawless on-site installation—ensuring your monumental clock stands the test of time.</p>
            <div className="space-y-4 text-sm font-medium text-gray-300">
              <p className="flex items-center"><MapPin className="mr-3 w-5 h-5 text-[#EAB308]"/> Global Architectural Integration</p>
              <p className="flex items-center"><Clock className="mr-3 w-5 h-5 text-[#EAB308]"/> Lifetime Horological Support</p>
            </div>
          </div>

          <div className="md:w-3/5 p-10 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300">
            <form action="https://formspree.io/f/xdabypko" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" name="firstName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] dark:focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] dark:focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Interested In</label>
                <select name="clockType" className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent text-gray-700 dark:text-gray-300">
                  <option value="Tower Clock" className="bg-white dark:bg-gray-900">Tower Clock</option>
                  <option value="Floral Garden Clock" className="bg-white dark:bg-gray-900">Floral Garden Clock</option>
                  <option value="Skeleton Dial Clock" className="bg-white dark:bg-gray-900">Skeleton Dial Clock</option>
                  <option value="Custom/Bespoke" className="bg-white dark:bg-gray-900">Other / Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Project Requirements</label>
                <textarea name="message" rows="4" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent resize-none dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#EAB308] text-white py-4 font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors duration-300 mt-4">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState('intro');

  // Enhanced Text & Specific Images for each Tab
  const aboutData = {
    intro: {
      title: "Our Heritage & Introduction",
      text: "We are New Precision Engineering, formerly Pioneer Watch Co., master horologists dealing in monumental tower clocks and customized wall clocks since 1940. We employ highly trained professionals and designers who deeply understand our clients' architectural requirements. We deliver these masterpieces alongside trouble-free installation, offering quick and economical maintenance. If you want your building to stand apart, commission the right tower clock. Because true craftsmanship is inherently classy.",
      image: "https://images.unsplash.com/photo-1583485088034-607f320ea314?auto=format&fit=crop&q=80"
    },
    mission: {
      title: "Our Core Mission",
      text: "Our mission is absolute precision. We strive to provide our customers with exactly what they envision, precisely when they need it, delivering the finest, reliable, top-quality products accompanied by defect-free, highly responsive services. We are a growth-oriented company that succeeds through rigorous teamwork and continuous improvement, ensuring we treat every client and employee with the highest respect and care.",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80"
    },
    vision: {
      title: "Our Global Vision",
      text: "It is our ultimate vision to lead the Tower Clock Business across the world. We aim to achieve this by consistently applying our engineering prowess to transform ordinary buildings into extraordinary, unforgettable architectural landmarks that stand the test of time for generations to come.",
      image: "https://images.unsplash.com/photo-1529158062015-c64defbea271?auto=format&fit=crop&q=80"
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FFFDF9] dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <SEO title="About Us" description="Learn about the history, mission, and vision of New Precision Engineering." />
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase tracking-widest font-bold dark:text-white text-gray-900 mb-6">Who We Are</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['intro', 'mission', 'vision'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${activeTab === tab ? 'bg-[#EAB308] text-white shadow-xl scale-105' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden transition-colors duration-300">
          <AnimatePresence mode='wait'>
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Text Side */}
              <div className="relative z-10">
                <Star className="absolute -top-10 -left-10 text-[#F3ECE4] dark:text-gray-700 w-32 h-32 opacity-30 pointer-events-none" />
                <h3 className="text-3xl font-bold mb-6 text-[#EAB308] uppercase tracking-widest leading-tight">{aboutData[activeTab].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-loose text-lg font-light">
                  {aboutData[activeTab].text}
                </p>
              </div>

              {/* Image Side */}
              <div className="h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutData[activeTab].image} alt={aboutData[activeTab].title} className="w-full h-full object-cover" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen">
      <SEO title="Our Products" description="Browse our portfolio of monumental clocks, bracket clocks, skeleton dials, and custom architectural timepieces." />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">Our Products</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">From intelligent tower setups to stunning floral garden displays, we offer a comprehensive range of customized architectural timepieces.</p>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative h-80 rounded-none overflow-hidden cursor-pointer shadow-lg bg-gray-100 dark:bg-gray-800">
              <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 flex flex-col justify-center text-center">
                <h3 className="text-[#EAB308] text-xl uppercase tracking-widest font-bold mb-3">{product.title}</h3>
                <p className="text-white text-sm leading-relaxed">{product.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-lg uppercase tracking-widest font-bold text-left">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Legacy() {
  const [activeTab, setActiveTab] = useState(founders[0].name);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <SEO title="Legacy & Awards" description="Discover the 80+ year history and global awards of New Precision Engineering." />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase tracking-widest font-bold dark:text-white text-gray-900 mb-6">Our Legacy</h2>
          
          {/* Founder Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {founders.map((founder) => (
              <button 
                key={founder.name} 
                onClick={() => setActiveTab(founder.name)} 
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${activeTab === founder.name ? 'bg-[#EAB308] text-white shadow-xl scale-105' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {founder.name}
              </button>
            ))}
          </div>

          {/* Card View */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden transition-colors duration-300">
            <AnimatePresence mode='wait'>
              {founders.map((founder) => (
                activeTab === founder.name && (
                  <motion.div 
                    key={founder.name} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 0.4 }} 
                    className="grid md:grid-cols-2 gap-12 items-center text-left"
                  >
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-2 text-[#EAB308] uppercase tracking-widest">{founder.name}</h3>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{founder.era}</p>
                      <p className="text-gray-600 dark:text-gray-300 leading-loose text-lg font-light">
                        {founder.desc}
                      </p>
                    </div>
                    <div className="h-80 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                      <img src={founder.img} alt={founder.name} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Awards Section remains full-width */}
        <section className="py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl uppercase tracking-widest font-bold text-[#EAB308]">Awards & Achievements</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">Our commitment to excellence has been recognized locally and globally for over eight decades.</p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start">
                  <Award className="text-[#EAB308] mt-1 mr-4 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-xl uppercase tracking-wide dark:text-white">US Army Recognition (1942-1945)</h4>
                    <p className="text-gray-500 dark:text-gray-400">Manufactured the first 24-Hour Analogue clock in all of Asia for the US Army in India.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="text-[#EAB308] mt-1 mr-4 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-xl uppercase tracking-wide dark:text-white">Asia Award (1987)</h4>
                    <p className="text-gray-500 dark:text-gray-400">Nominated and won the prestigious international Asia Award for best performance and quality.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-[#EAB308] p-8 text-center shadow-2xl transform translate-y-8 text-gray-900">
                  <h3 className="text-5xl font-bold mb-2">1940</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-900/80">Year Established</p>
               </div>
               <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 text-center shadow-2xl transition-colors duration-300">
                  <h3 className="text-5xl font-bold mb-2 text-[#EAB308]">40+</h3>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Major Installations</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-[#FFFDF9] dark:bg-gray-950 transition-colors duration-300 min-h-screen">
      <SEO title="Installations" description="View the map of our 40+ monumental clock installations worldwide." />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">Our Installed Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">A reference list of monumental clocks manufactured and installed by our team across the country.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 shadow-lg border border-gray-100 dark:border-gray-800 max-h-[600px] overflow-y-auto custom-scrollbar transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {installedProjects.map((project, index) => (
              <div key={index} className="flex items-start text-sm md:text-base border-b border-gray-50 dark:border-gray-800 pb-2">
                <MapPin className="text-[#EAB308] w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex items-center">
      <SEO title="Contact Us" description="Commission an architectural masterpiece. Contact New Precision Engineering today." />
      <div className="max-w-5xl mx-auto bg-gray-900 dark:bg-black shadow-2xl overflow-hidden flex flex-col md:flex-row w-full transition-colors duration-300">
        <div className="md:w-2/5 bg-gray-800 p-10 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-700">
          <h3 className="text-3xl uppercase tracking-widest font-bold mb-4 text-[#EAB308]">Commission an Architectural Masterpiece</h3>
          <p className="text-white/80 mb-8 leading-relaxed">True craftsmanship extends beyond the workshop. Our timepieces are exclusively installed by our in-house, fully insured master technicians, ensuring absolute precision and flawless integration into your structure.</p>
          <div className="space-y-4 text-sm font-medium text-gray-300">
            <p className="flex items-center"><MapPin className="mr-3 w-5 h-5 text-[#EAB308]"/> Worldwide Commissioning</p>
            <p className="flex items-center"><Star className="mr-3 w-5 h-5 text-[#EAB308]"/> Comprehensive Maintenance</p>
          </div>
        </div>
        <div className="md:w-3/5 p-10 bg-[#FFFDF9] dark:bg-gray-950 transition-colors duration-300">
          <form action="https://formspree.io/f/xdabypko" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                <input type="text" name="firstName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] dark:focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                <input type="text" name="lastName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] dark:focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Interested In</label>
              <select name="clockType" className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent text-gray-700 dark:text-gray-300">
                <option value="Tower Clock" className="bg-white dark:bg-gray-900">Tower Clock</option>
                <option value="Floral Garden Clock" className="bg-white dark:bg-gray-900">Floral Garden Clock</option>
                <option value="Skeleton Dial Clock" className="bg-white dark:bg-gray-900">Skeleton Dial Clock</option>
                <option value="Custom/Bespoke" className="bg-white dark:bg-gray-900">Other / Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Project Requirements</label>
              <textarea name="message" rows="4" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent resize-none dark:text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#EAB308] text-white py-4 font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors duration-300 mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


// ==========================================
// MAIN APP & ROUTER CONFIGURATION
// ==========================================

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen font-sans flex flex-col ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-[#FFFDF9] text-gray-800'}`}>
        
        {/* --- FLOATING NAVBAR --- */}
        <div className="fixed top-0 left-0 w-full z-50 pt-4 px-4 flex justify-center pointer-events-none">
          <nav className="pointer-events-auto w-full md:w-[85%] lg:w-[80%] max-w-7xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-4 px-6 md:px-8 flex justify-between items-center shadow-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-full transition-colors duration-300">
            
            <div className="flex-1">
              <Link to="/" className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-black dark:text-white transition-colors">
                New Precision <span className="font-light text-[#EAB308] hidden sm:inline">Engineering</span>
              </Link>
            </div>
            
            <div className="hidden lg:flex space-x-8 font-bold text-gray-800 dark:text-gray-200 text-sm uppercase tracking-widest flex-1 justify-center transition-colors">
              <Link to="/" className="hover:text-[#EAB308] dark:hover:text-[#EAB308] transition">Home</Link>
              <Link to="/about" className="hover:text-[#EAB308] dark:hover:text-[#EAB308] transition">About</Link>
              <Link to="/products" className="hover:text-[#EAB308] dark:hover:text-[#EAB308] transition">Products</Link>
              <Link to="/legacy" className="hover:text-[#EAB308] dark:hover:text-[#EAB308] transition">Legacy</Link>
              <Link to="/projects" className="hover:text-[#EAB308] dark:hover:text-[#EAB308] transition">Installations</Link>
            </div>
            
{/* UPDATED ACTIONS: WhatsApp Icon is now here, Toggle removed */}
            <div className="hidden lg:flex items-center justify-end space-x-6 flex-1">
              <a href="https://wa.me/923004455252" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-[#25D366] dark:hover:text-[#25D366] transition-transform hover:scale-110" aria-label="WhatsApp">
                <WhatsAppIcon size={26} />
              </a>
              <Link to="/contact" className="text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:text-[#EAB308] dark:hover:text-[#EAB308] transition flex items-center gap-2 border border-black dark:border-white hover:border-[#EAB308] dark:hover:border-[#EAB308] px-5 py-2 rounded-full">
                Contact
              </Link>
            </div>
            
            <div className="lg:hidden flex items-center space-x-4 pointer-events-auto">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-600 dark:text-gray-300">
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button className="text-black dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-24 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl rounded-3xl z-40 lg:hidden flex flex-col p-6 space-y-4 border border-gray-200 dark:border-gray-800">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest border-b dark:border-gray-800 pb-2 dark:text-white">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest border-b dark:border-gray-800 pb-2 dark:text-white">About</Link>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest border-b dark:border-gray-800 pb-2 dark:text-white">Products</Link>
              <Link to="/legacy" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest border-b dark:border-gray-800 pb-2 dark:text-white">Legacy</Link>
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest border-b dark:border-gray-800 pb-2 dark:text-white">Installations</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-[#EAB308]">Contact Us</Link>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* --- FOOTER --- */}
        <footer className="bg-gray-900 dark:bg-black text-white py-16 px-6 md:px-12 mt-auto border-t border-gray-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8">
             <div className="md:col-span-2">
               <div className="text-2xl font-bold uppercase tracking-tighter text-white mb-4">
                 New Precision <span className="font-light text-[#EAB308]">Engineering</span>
               </div>
               <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6">Since 1940. Manufacturing tower clocks, customized wall clocks, and breathing life into architectural masterpieces worldwide.</p>
               
               {/* NEW: Number Card inside Footer */}
               <div className="inline-flex items-center gap-4 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 mt-2 shadow-lg">
                 <a href="https://wa.me/923004455252" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366]/10 flex items-center justify-center text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-colors duration-300 shadow-lg" aria-label="Chat on WhatsApp">
                   <WhatsAppIcon size={24} />
                 </a>
                 <div>
                   <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Call / WhatsApp</p>
                   <a href="https://wa.me/923004455252" className="text-lg font-bold text-white hover:text-[#EAB308] transition-colors tracking-wide">
                     +92 300 4455252
                   </a>
                 </div>
               </div>

             </div>
             <div>
               <h4 className="font-bold mb-6 text-[#EAB308] uppercase tracking-widest text-sm">Quick Links</h4>
               <ul className="space-y-3 text-gray-400 text-sm uppercase tracking-wider">
                 <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                 <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
                 <li><Link to="/legacy" className="hover:text-white transition">Legacy</Link></li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-6 text-[#EAB308] uppercase tracking-widest text-sm">Connect With Us</h4>
               <div className="flex space-x-4">
                  <a href="https://wa.me/923004455252" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition text-gray-400 shadow-md"><WhatsAppIcon size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition text-gray-400 shadow-md"><FacebookIcon size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition text-gray-400 shadow-md"><InstagramIcon size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition text-gray-400 shadow-md"><LinkedinIcon size={20} /></a>
               </div>
             </div>
          </div>
          <div className="max-w-7xl mx-auto text-gray-500 text-sm text-center md:text-left">
            <p className="uppercase tracking-wider">© 2026 New Precision Engineering. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}