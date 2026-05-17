import React from "react";

const About = () => {
  const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <section
      id="about"
      // h-screen and flex ensure it is EXACTLY the height of your monitor and centered
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50/30 overflow-hidden"
    >
      {/* Soft Animated Background */}
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-blue-400/20 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-emerald-400/20 blur-[100px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }}></div>

      {/* Bento Grid Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        
        {/* BENTO BOX 1: Main Intro (Spans 2 Columns) */}
        <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <i className="bx bx-user text-blue-500"></i>
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">About Me</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            I build digital products that <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              scale and succeed.
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
            Hi, I’m <strong>Monu Kumar</strong>. I specialize in engineering highly scalable frontends using <strong>React and Tailwind CSS</strong>, backed by resilient server-side architectures built with <strong>Django and MySQL</strong>.
          </p>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed hidden sm:block">
            Beyond just writing code, I focus on system design, RESTful APIs, and smooth Docker deployments to turn abstract ideas into functional, revenue-generating reality.
          </p>
        </div>

        {/* BENTO BOX 2: Quick Status/Highlight (Spans 1 Column) */}
        <div className="md:col-span-1 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-3xl p-6 lg:p-8 text-white shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <div>
            <i className="bx bx-code-alt text-4xl mb-4 opacity-80"></i>
            <h3 className="text-2xl font-bold mb-1">Full Stack</h3>
            <p className="text-blue-100 text-sm">Developer</p>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center gap-2 text-sm font-medium bg-black/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>
        </div>

        {/* BENTO BOX 3: Skills Ribbon (Spans all 3 Columns to save vertical height) */}
        <div className="md:col-span-3 bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">My Tech Stack</p>
          
          {/* Tightly packed horizontal flex container */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-all">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-[11px] font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;