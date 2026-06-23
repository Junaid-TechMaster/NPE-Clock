import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data';
import { staggerContainer } from '../utils/animations';

export default function Products() {
  return (
    <section className="pt-28 pb-24 px-3 sm:px-6 md:px-12 bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen">
      <SEO title="Our Products" description="Browse our portfolio of monumental clocks, bracket clocks, skeleton dials, and custom architectural timepieces." />
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ transformPerspective: 1200 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#EAB308] font-bold uppercase tracking-widest text-sm mb-3">Crafted Since 1940</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">Our Products</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            From intelligent tower setups to stunning floral garden displays, we offer a comprehensive range of customized architectural timepieces.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 16, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: -6,
                rotateY: index % 2 === 0 ? 8 : -8,
                scale: 1.03,
                boxShadow: '0 0 30px rgba(234,179,8,0.55), 0 12px 40px rgba(0,0,0,0.35)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              style={{ transformPerspective: 800 }}
              className="group relative h-72 md:h-80 overflow-hidden cursor-pointer shadow-lg bg-gray-100 dark:bg-gray-800"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 flex flex-col justify-center text-center">
                <h3 className="text-[#EAB308] text-lg uppercase tracking-widest font-bold mb-3">{product.title}</h3>
                <p className="text-white text-sm leading-relaxed">{product.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-base uppercase tracking-widest font-bold text-left">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <motion.div whileHover={{ scale: 1.04, rotateX: -3, transition: { duration: 0.2 } }} style={{ transformPerspective: 600 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block bg-[#EAB308] text-white px-10 py-4 uppercase tracking-widest font-bold hover:bg-yellow-600 transition text-sm"
            >
              Request a Custom Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
