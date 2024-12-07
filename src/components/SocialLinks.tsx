import { Icon } from 'lucide-react';
import { socialLinks } from '../data/social';
import * as icons from 'lucide-react';
import { motion } from 'framer-motion';

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-6 justify-center ${className}`}>
      {socialLinks.map((link, index) => {
        const IconComponent = icons[link.icon as keyof typeof icons];
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
            aria-label={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconComponent 
              size={24} 
              className="text-gray-600 group-hover:text-blue-600 transition-colors"
            />
          </motion.a>
        );
      })}
    </div>
  );
}