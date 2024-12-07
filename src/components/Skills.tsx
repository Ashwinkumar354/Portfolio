import { skills } from '../data/skills';

export function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-blue-600">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}