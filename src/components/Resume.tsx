import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { resumeData } from '../data/resume';

export function Resume() {
  return (
    <section className="py-20 bg-gray-50" id="resume">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-[16/9] relative group">
            <img 
              src={resumeData.previewUrl} 
              alt="Resume preview" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <motion.a
                href={resumeData.url}
                download
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileDown size={20} />
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}