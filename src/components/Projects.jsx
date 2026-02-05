import React, { useState } from "react";

/* ---------- IMAGE SLIDER ---------- */
function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-full h-32 overflow-hidden rounded-xl group">
      <img
        src={images[current]}
        alt="project"
        className="w-full h-full object-cover transition duration-500"
      />

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={prevImage}
          className="w-8 h-8 rounded-full bg-white/80 backdrop-blur
          text-gray-800 shadow hover:scale-110 transition"
        >
          ‹
        </button>

        <button
          onClick={nextImage}
          className="w-8 h-8 rounded-full bg-white/80 backdrop-blur
          text-gray-800 shadow hover:scale-110 transition"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition
              ${current === index ? "bg-blue-500 scale-125" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React • Tailwind",
      link: "#",
      images: ["https://picsum.photos/600/400?1", "https://picsum.photos/600/400?2"],
    },
    {
      title: "CRUD Application",
      tech: "React • REST API",
      link: "#",
      images: ["https://picsum.photos/600/400?3", "https://picsum.photos/600/400?4"],
    },
    {
      title: "Authentication System",
      tech: "JWT • Secure Login",
      link: "#",
      images: ["https://picsum.photos/600/400?5", "https://picsum.photos/600/400?6"],
    },
    {
      title: "E-Commerce App",
      tech: "React • API",
      link: "#",
      images: ["https://picsum.photos/600/400?7", "https://picsum.photos/600/400?8"],
    },
    {
      title: "Admin Dashboard",
      tech: "Charts • Analytics",
      link: "#",
      images: ["https://picsum.photos/600/400?9", "https://picsum.photos/600/400?10"],
    },
    {
      title: "AI-Powered Web App",
      tech: "React • AI API",
      link: "#",
      images: ["https://picsum.photos/600/400?11", "https://picsum.photos/600/400?12"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Real work, real experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl
              rounded-2xl p-3 shadow-md border border-white/40
              transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ImageSlider images={project.images} />

              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-500 mb-3">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2
                  px-4 py-1.5 rounded-full text-xs font-semibold text-white
                  bg-gradient-to-r from-blue-500 to-green-500
                  hover:scale-105 transition"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
