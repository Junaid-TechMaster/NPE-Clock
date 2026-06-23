import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <section className="pt-28 pb-24 px-3 sm:px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex items-start md:items-center">
      <SEO title="Contact Us" description="Commission an architectural masterpiece. Contact New Precision Engineering today." />
      <div className="max-w-5xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 24 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ transformPerspective: 1200 }}
          className="text-center mb-10"
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-3">
            Commission a Masterpiece
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Tell us about your project and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ transformPerspective: 1100 }}
          className="bg-gray-900 dark:bg-black shadow-2xl overflow-hidden flex flex-col md:flex-row w-full transition-colors duration-300 rounded-none border border-gray-800"
        >
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: 12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ transformPerspective: 900 }}
            className="md:w-2/5 bg-gray-800 p-8 md:p-10 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-700"
          >
            <h3 className="text-xl md:text-3xl uppercase tracking-widest font-bold mb-4 text-[#EAB308]">
              Precision Engineering &amp; Timeless Craftsmanship
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed text-sm md:text-base">
              True craftsmanship extends beyond the workshop. Our timepieces are exclusively installed by our in-house, fully insured master technicians — ensuring absolute precision and flawless integration into your structure.
            </p>
            <div className="space-y-3 text-sm font-medium text-gray-300">
              <p className="flex items-center"><MapPin className="mr-3 w-5 h-5 text-[#EAB308] flex-shrink-0" /> Worldwide Commissioning</p>
              <p className="flex items-center"><Star className="mr-3 w-5 h-5 text-[#EAB308] flex-shrink-0" /> Comprehensive Lifetime Support</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ transformPerspective: 900 }}
            className="md:w-3/5 p-8 md:p-10 bg-[#FFFDF9] dark:bg-gray-950 transition-colors duration-300"
          >
            <form action="https://formspree.io/f/xdabypko" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" name="firstName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] dark:focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] dark:focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input type="tel" name="phone" className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent dark:text-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">Interested In</label>
                <select name="clockType" className="w-full border-b-2 border-gray-300 dark:border-gray-700 focus:border-[#EAB308] outline-none py-2 transition-colors bg-transparent text-gray-700 dark:text-gray-300 text-sm">
                  <option value="Tower Clock" className="bg-white dark:bg-gray-900">Tower Clock</option>
                  <option value="Floral Garden Clock" className="bg-white dark:bg-gray-900">Floral Garden Clock</option>
                  <option value="Skeleton Dial Clock" className="bg-white dark:bg-gray-900">Skeleton Dial Clock</option>
                  <option value="Monumental Clock" className="bg-white dark:bg-gray-900">Monumental Clock</option>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
