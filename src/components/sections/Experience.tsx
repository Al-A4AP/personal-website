import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Experience" subtitle="Professional Journey" />

        <div className="space-y-8 mt-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:text-indigo-300 transition-colors duration-300"
            >
              <h3 className="font-semibold text-lg">{exp.role}</h3>

              <p className="text-sm text-gray-500">
                {exp.company} • {exp.period}
              </p>

              <ul className="ml-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-none text-justify">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
