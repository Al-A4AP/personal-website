import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePortfolioStore } from "../store/portfolioStore";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = usePortfolioStore((state) => state.getProjectById(id || ""));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h2>
          <button onClick={() => navigate("/")} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-primary to-purple-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-white hover:text-gray-200 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Portfolio
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/90 mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="rounded-2xl shadow-2xl h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* STAR Method Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Situation */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
              S
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Situation</h2>
          </div>
          <div className="card ml-16">
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.situation}
            </p>
          </div>
        </div>

        {/* Task */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
              T
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Task</h2>
          </div>
          <div className="card ml-16">
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.task}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
              A
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Action</h2>
          </div>
          <div className="card ml-16">
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.action}
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
              R
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Result</h2>
          </div>
          <div className="card ml-16">
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex flex-wrap gap-4 mt-12">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
