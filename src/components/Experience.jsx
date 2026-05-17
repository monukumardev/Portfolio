import React from "react";
import "boxicons/css/boxicons.min.css";
import JioLogo from "../assets/Jio.png";
import TechplementLogo from "../assets/Techplement.jpeg";
import BitMapLogo from "../assets/BitMaptechnologies.png";

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
      logo: JioLogo,
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
      logo: TechplementLogo,
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
      logo: BitMapLogo,
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