import { SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Hi, I'm Ashwin Kumar
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate software developer with expertise in Java, Data Structures, and Algorithms.
          I love coding and building impactful projects that make a difference.
        </p>
        <SocialLinks className="justify-center" />
      </div>
    </section>
  );
}