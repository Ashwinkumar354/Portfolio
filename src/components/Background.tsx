import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgb(239 246 255), rgb(250 245 255))',
            'linear-gradient(to bottom right, rgb(243 244 246), rgb(243 232 255))',
            'linear-gradient(to bottom right, rgb(239 246 255), rgb(250 245 255))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-200/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}