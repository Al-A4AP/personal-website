import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { portfolios } from "../../data/portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Portfolio" subtitle="Selected Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-indigo-300 transition"
                    >
                      {" "}
                      GitHub{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
