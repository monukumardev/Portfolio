import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "95%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: "88%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: "92%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Django",
      level: "88%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "MySQL",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "REST API",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Docker",
      level: "75%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden"
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/30 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/30 blur-[100px] rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-gray-700 uppercase">
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Skills
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Technologies I use to create scalable frontend and backend systems
            with modern development practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={index} className="relative group">
              {/* Glow border */}
              <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

              {/* Card */}
              <div
                className="relative bg-white/80 backdrop-blur-xl rounded-[1.5rem]
                           p-5 lg:p-6 flex flex-col items-center
                           border border-white/60
                           shadow-lg shadow-gray-200/50
                           hover:-translate-y-2
                           hover:shadow-xl hover:shadow-blue-500/10
                           transition-all duration-500"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl flex items-center justify-center
                             bg-gradient-to-br from-white to-slate-50
                             shadow-md mb-4
                             group-hover:scale-110 group-hover:rotate-6
                             transition-all duration-500"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>

                {/* Skill name */}
                <p className="font-bold text-gray-700 text-sm sm:text-base mb-3 group-hover:text-blue-600 transition-colors duration-300 text-center">
                  {skill.name}
                </p>

                {/* Progress bar */}
                <div className="w-full">
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                      style={{ width: skill.level }}
                    ></div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {skill.level}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            Always learning new technologies and improving every day
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;