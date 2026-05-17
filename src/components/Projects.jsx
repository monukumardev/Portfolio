import React, { useEffect, useState } from "react";
import Portfolio1 from "../assets/Portfolio1.png";
import Portfolio2 from "../assets/Portfolio2.png";
import Portfolio3 from "../assets/Portfolio3.png";
import Gently1 from "../assets/Gently-1.png";
import Gently2 from "../assets/Gently-2.png";
import Gently3 from "../assets/Gently-3.png";


/* ---------- AUTO IMAGE SLIDER ---------- */
function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-2xl">
      <img
        src={images[current]}
        alt="project"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-blue-500 scale-125"
                : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- PROJECT MODAL ---------- */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl
        max-h-[85vh] overflow-hidden"
      >
        {/* sticky header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between
          px-6 py-4 bg-white border-b border-gray-100 rounded-t-3xl"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {project.tech}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100
            hover:bg-red-100 transition text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* scrollable body */}
        <div className="overflow-y-auto max-h-[65vh] px-6 py-5 space-y-5">
          <p className="text-gray-600 leading-7 text-sm">
            This project demonstrates a modern full stack application
            architecture with clean UI design, scalable backend services,
            API integrations, and production-ready code standards.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Project Highlights
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Fully responsive design</li>
              <li>• Reusable React components</li>
              <li>• API integration</li>
              <li>• Scalable folder structure</li>
              <li>• Optimized performance</li>
              <li>• Backend integration support</li>
              <li>• Modern UI animations</li>
              <li>• Production ready deployment</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              My Contribution
            </h3>

            <p className="text-sm text-gray-600 leading-7">
              I worked on frontend architecture, API handling,
              responsive layouts, component reusability,
              and performance optimization.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Tech Used
            </h3>

            <p className="text-sm text-gray-600">
              React, Tailwind CSS, REST API, Django, MySQL
            </p>
          </div>
        </div>

        {/* sticky footer */}
        <div
          className="sticky bottom-0 bg-white border-t border-gray-100
          px-6 py-4 flex gap-3 rounded-b-3xl"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-full
            text-sm font-semibold text-white
            bg-gradient-to-r from-blue-500 to-emerald-500"
          >
            View Code
          </a>

          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-full
            text-sm font-semibold border border-gray-200 text-gray-700"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN PROJECT SECTION ---------- */
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      tech: "React • Tailwind",
      github: "https://github.com/monukumardev/Portfolio",
      preview: "https://monukumar-portfolio.vercel.app/",
      images: [Portfolio1, Portfolio2, Portfolio3],
    },
    {
      title: "Gently",
      tech: "React • Tailwind • Material UI",
      github: "#",
      preview: "https://gently-orcin.vercel.app",
      images: [Gently1, Gently2, Gently3],
    },
    {
      title: "Authentication System",
      tech: "JWT • Secure Login",
      github: "#",
      preview: "#",
      images: [Portfolio3, Portfolio1, Portfolio2],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Projects
            </span>
          </h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* top row */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-gray-800">
                  {project.title}
                </h3>

                {/* button with tooltip */}
                <div className="relative group">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-full text-xs font-semibold
                    text-white bg-gradient-to-r from-blue-500 to-emerald-500
                    shadow hover:scale-105 transition"
                  >
                    Know More
                  </button>

                  <div
                    className="absolute right-0 top-12 whitespace-nowrap
                    bg-white shadow-lg border border-gray-100
                    rounded-xl px-3 py-2 text-xs text-gray-600
                    opacity-0 group-hover:opacity-100
                    transition duration-300 pointer-events-none"
                  >
                    Click to view details ☁️
                  </div>
                </div>
              </div>

              <ImageSlider images={project.images} />

              <p className="text-sm text-gray-500 mt-3 mb-4">
                {project.tech}
              </p>

              {/* bottom buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-full text-sm font-semibold text-white
                  bg-gradient-to-r from-blue-500 to-emerald-500"
                >
                  View Project
                </a>

                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-full text-sm font-semibold
                  border border-gray-200 text-gray-700"
                >
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* popup modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;