import React, { useState } from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { useNavigate } from "react-router-dom";

const PortfolioSection: React.FC = () => {
  const { projects } = usePortfolioStore();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "E-commerce", "Collaboration", "Healthcare"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.title.includes(filter));

  return (
    <section id="portfolio" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle mx-auto mt-4">
            Featured projects showcasing my expertise in full-stack development
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card group cursor-pointer transform hover:-translate-y-2"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 rounded-lg mb-6 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* View Details Link */}
              <div className="flex items-center text-primary font-semibold group-hover:underline">
                View Details
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
