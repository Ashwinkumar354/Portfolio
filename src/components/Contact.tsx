import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          className="text-center space-y-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 text-blue-600" />
            <a 
              href="mailto:kinnigoliashwin@gmail.com" 
              className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors"
            >
              kinnigoliashwin@gmail.com
            </a>
          </motion.div>
          
          <div className="pt-8">
            <SocialLinks />
          </div>
          
          <motion.p 
            className="text-gray-600 mt-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Feel free to reach out! I'm always open to new opportunities and connections.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}