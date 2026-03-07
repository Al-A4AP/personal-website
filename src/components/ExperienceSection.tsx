import React from "react";
import { usePortfolioStore } from "../store/portfolioStore";

const ExperienceSection: React.FC = () => {
  const { experiences } = usePortfolioStore();

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    return dateString.split("-")[0];
  };

  return (
    <section id="experience" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto mt-4">
            My professional journey and career milestones
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 last:mb-0">
              <div
                className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div
                  className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                >
                  <div className="card">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-lg text-gray-700 font-medium mb-4">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-secondary mr-2 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:w-2/12 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
