import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="skills that I have" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-700 group-hover:bg-indigo-300/10 transition-colors duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-indigo-300 shadow-[0_0_12px_rgba(128,0,0,0.9)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
