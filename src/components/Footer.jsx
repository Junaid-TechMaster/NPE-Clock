import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './Icons';

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-black text-white py-14 px-4 sm:px-6 md:px-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10 mb-8">

      {/* Brand */}
      <div className="sm:col-span-2">
        <div className="text-2xl font-bold uppercase tracking-tighter text-white mb-4">
          New Precision <span className="font-light text-[#EAB308]">Engineering</span>
        </div>
        <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6">
          Since 1940. Manufacturing tower clocks, customized wall clocks, and breathing life into architectural masterpieces worldwide.
        </p>
        <div className="inline-flex items-center gap-4 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50 shadow-lg">
          <a
            href="https://wa.me/923004455252"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#25D366]/10 flex items-center justify-center text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
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

      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-5 text-[#EAB308] uppercase tracking-widest text-sm">Quick Links</h4>
        <ul className="space-y-3 text-gray-400 text-sm uppercase tracking-wider">
          <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
          <li><Link to="/legacy" className="hover:text-white transition">Legacy</Link></li>
          <li><Link to="/projects" className="hover:text-white transition">Installations</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h4 className="font-bold mb-5 text-[#EAB308] uppercase tracking-widest text-sm">Connect With Us</h4>
        <div className="flex space-x-3 mb-6">
          <a href="https://wa.me/923004455252" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition text-gray-400"><WhatsAppIcon size={18} /></a>
          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition text-gray-400"><FacebookIcon size={18} /></a>
          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition text-gray-400"><InstagramIcon size={18} /></a>
          <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition text-gray-400"><LinkedinIcon size={18} /></a>
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="flex items-center gap-2"><MapPin size={14} className="text-[#EAB308]" /> Lahore, Pakistan</p>
          <p className="flex items-center gap-2"><Clock size={14} className="text-[#EAB308]" /> Mon – Sat, 9am – 6pm</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto text-gray-500 text-sm text-center md:text-left">
      <p className="uppercase tracking-wider">© 2026 New Precision Engineering. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
