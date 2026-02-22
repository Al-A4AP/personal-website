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
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>

              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-sm text-gray-500 mt-2">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
