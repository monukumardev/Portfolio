import React from "react";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      tag: "UI Library",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      tag: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      tag: "Responsive UI",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      tag: "Utility CSS",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      tag: "Backend",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      tag: "Database",
    },
    {
      name: "REST API",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      tag: "API Dev",
    },
    {
      name: "LangChain",
      icon: "https://python.langchain.com/img/favicon.ico",
      tag: "AI Framework",
    },
    {
      name: "Ollama",
      icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/ollama.png",
      tag: "Local LLM",
    },
    {
      name: "ChromaDB",
      icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
      tag: "Vector DB",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 lg:py-24 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background Glows matching About page */}
      <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] bg-blue-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] bg-emerald-300/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-600">
              My Toolkit
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500">
              Technologies
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Building modern web applications, scalable backend systems, and
            AI-powered solutions with the latest technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[24px] border border-white bg-white/70 backdrop-blur-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Exact Line Grid Overlay from About Section */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

              {/* Hover Smooth Color Transition */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/50 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              {/* Animated Top Indicator Line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 group-hover:w-full transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Wrapper */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-emerald-400/10 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Tag */}
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/60 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl border border-white bg-white/70 backdrop-blur-2xl px-6 py-4 shadow-md">
            {/* Same Line Grid Overlay for bottom CTA */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
            
            <div className="relative flex items-center gap-3 z-10">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-sm sm:text-base text-slate-700 font-medium">
                Exploring AI, Full Stack Development & Modern Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;