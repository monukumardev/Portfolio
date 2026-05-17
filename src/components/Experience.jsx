import React from "react";
import "boxicons/css/boxicons.min.css";

function Experience() {
  const experiences = [
    {
      company: "Reliance Jio",
      role: "Full Stack Developer",
      period: "Jul 2024 – Present",
      points: [
        "Built scalable React applications",
        "Created REST APIs & backend logic",
        "Handled database & authentication",
      ],
      logo: "data:image/png;base64,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",
    },
    {
      company: "TechPlement",
      role: "Frontend Developer",
      period: "Mar 2024 – Apr 2024",
      points: [
        "Developed responsive UI in React",
        "Used Tailwind CSS for clean design",
        "Improved UX & performance",
      ],
      logo: "data:image/jpeg;base64,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",
    },
    {
      company: "BitMap Technologies",
      role: "Python Developer",
      period: "Oct 2023 - Mar 2024",
      points: [
        "Designed APIs & DB models",
        "Implemented auth systems",
        "Collaborated with frontend team",
      ],
      logo: "data:image/png;base64,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",
    },
  ];

  return (
    <section
      id="experience"
      // Added min-h-screen and flex to vertically center the content.
      // Reduced py-20 to py-10 to save vertical space.
      className="relative w-full min-h-screen flex items-center justify-center py-10 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden"
    >
      {/* Animated Background blobs */}
      <div className="absolute top-20 left-[-10%] w-64 md:w-96 h-64 md:h-96 bg-blue-200/40 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-5%] w-64 md:w-80 h-64 md:h-80 bg-emerald-200/40 blur-3xl rounded-full animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }}></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 z-10">

        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
            <i className="bx bx-briefcase text-blue-500"></i>
            <span className="text-sm font-bold tracking-wider text-gray-700 uppercase">Professional Path</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 drop-shadow-sm">Experience</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A look at my professional journey and the value I've delivered along the way.
          </p>
        </div>

        {/* Experience Cards Grid 
            Changed to lg:grid-cols-3 to keep all cards on one row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {experiences.map((exp, index) => (
            // On md screens (tablet), center the 3rd card. On lg screens (desktop), it fits in the 3rd column normally.
            <div 
              key={index} 
              className={index === 2 ? "md:col-span-2 lg:col-span-1 flex justify-center" : ""}
            >
              <div 
                className={`relative group bg-white/80 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 z-10 
                ${index === 2 ? 'w-full md:w-1/2 lg:w-full' : 'w-full'}`}
              >
                {/* Glowing border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10 blur-sm"></div>
                
                {/* Company & Role Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative p-1 bg-gray-50 rounded-full border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-500 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-emerald-600">
                      {exp.role}
                    </p>
                  </div>
                </div>

                {/* Period / Timeline */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-full border border-gray-200 mb-4">
                  <i className="bx bx-calendar"></i>
                  {exp.period}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 leading-relaxed text-sm">
                      <i className="bx bx-check-circle text-emerald-500 mt-0.5 flex-shrink-0 text-base"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;