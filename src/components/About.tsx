import { motion } from 'framer-motion';
import { Code2, GraduationCap, Brain } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="space-y-8 text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <GraduationCap className="w-12 h-12 text-blue-600 flex-shrink-0" />
            <p>
              I am a <span className="font-semibold text-gray-800">Computer Science and Engineering graduate (2024)</span> with 
              a deep enthusiasm for coding and programming.
            </p>
          </div>

          <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Code2 className="w-12 h-12 text-purple-600 flex-shrink-0" />
            <p>
              Skilled in <span className="font-semibold text-gray-800">Java development, web development, and application development</span>, 
              I have a strong foundation in data structures and algorithms, sharpened through problem-solving on platforms 
              like <a href="https://leetcode.com/u/kinnigoliashwin/" target="_blank" rel="noopener noreferrer" 
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-600">LeetCode</a> and 
              <a href="https://www.codechef.com/users/ashwin_2002" target="_blank" rel="noopener noreferrer" 
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-600"> CodeChef</a>.
            </p>
          </div>

          <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Brain className="w-12 h-12 text-blue-600 flex-shrink-0" />
            <p>
              Whether building impactful applications or exploring emerging technologies, I am driven by a 
              <span className="font-semibold text-gray-800"> passion for creating innovative and functional solutions</span> to 
              complex challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}