import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/legacy', label: 'Legacy' },
    { to: '/projects', label: 'Installations' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 pt-3 px-3 md:pt-4 md:px-4 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto w-full md:w-[90%] lg:w-[85%] max-w-7xl bg-white/85 dark:bg-gray-900/85 backdrop-blur-lg py-3 md:py-4 px-4 md:px-8 flex justify-between items-center shadow-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-full transition-colors duration-300">

          {/* Logo */}
          <div className="flex-1 min-w-0">
            <Link to="/" className="text-lg md:text-2xl font-bold uppercase tracking-tighter text-black dark:text-white transition-colors whitespace-nowrap">
              NPE <span className="font-light text-[#EAB308] hidden sm:inline">Clocks</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 font-bold text-gray-800 dark:text-gray-200 text-sm uppercase tracking-widest flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#EAB308] dark:hover:text-[#EAB308] transition whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center justify-end space-x-4 flex-1">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#EAB308] dark:hover:text-[#EAB308] transition"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <a
              href="https://wa.me/923004455252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-[#25D366] dark:hover:text-[#25D366] transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={24} />
            </a>
            <Link
              to="/contact"
              className="text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:text-[#EAB308] dark:hover:text-[#EAB308] transition flex items-center border border-black dark:border-white hover:border-[#EAB308] dark:hover:border-[#EAB308] px-4 py-2 rounded-full whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="lg:hidden flex items-center space-x-3 pointer-events-auto">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-600 dark:text-gray-300" aria-label="Toggle dark mode">
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button className="text-black dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-3 right-3 bg-white/97 dark:bg-gray-900/97 backdrop-blur-lg shadow-2xl rounded-3xl z-40 lg:hidden flex flex-col p-5 space-y-1 border border-gray-200 dark:border-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 py-3 dark:text-white hover:text-[#EAB308] dark:hover:text-[#EAB308] transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-widest text-[#EAB308] pt-2"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
