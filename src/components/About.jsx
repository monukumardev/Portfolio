import React from "react";

const About = () => {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "LangChain",
      icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain.png",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#f8fafc] py-14 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] bg-blue-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] bg-emerald-300/20 blur-[120px] rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 max-w-7xl w-full bg-white/70 backdrop-blur-2xl border border-white rounded-[36px] shadow-xl overflow-hidden">

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="relative z-10 p-6 lg:p-10">

          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

            <div className="flex flex-wrap items-center gap-3">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <i className="bx bx-user text-blue-600"></i>
                <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
                  About Me
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-700">
                  Available for work
                </span>
              </div>

            </div>

            {/* Small Badge */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
              <i className="bx bx-code-alt text-lg"></i>
              <span className="text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-10 items-center">

            {/* Left Content */}
            <div>

              {/* Heading */}
              <h2 className="text-[38px] md:text-[52px] font-black leading-[1.02] tracking-tight text-gray-900">
                Scalable AI Products
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 mt-2">
                  Full Stack Engineering
                </span>
              </h2>

              {/* Description */}
              <div className="mt-6 space-y-5 max-w-3xl">

                <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed">
                  I’m Monu Kumar, a Full Stack Developer focused on building scalable web applications, intelligent backend systems, and AI-powered solutions.
                </p>

                <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed">
                  I work primarily with <strong>React</strong>,{" "}
                  <strong>Django REST Framework</strong>, and{" "}
                  <strong>MySQL</strong> to develop modern full-stack applications while integrating Generative AI technologies such as{" "}
                  <strong>LangChain</strong>, <strong>Ollama</strong>, and{" "}
                  <strong>LLaMA 3</strong> into real-world workflows.
                </p>

                <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed">
                  From RESTful APIs and backend architecture to RAG pipelines and intelligent dashboards, I enjoy solving complex engineering problems with clean and scalable solutions.
                </p>

              </div>


            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-4">

              {/* Card 1 */}
              <div className="group rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-xl hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <i className="bx bx-server text-2xl text-blue-400"></i>
                </div>

                <h4 className="text-3xl font-black">1+</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Years Experience
                </p>

              </div>

              {/* Card 2 */}
              <div className="group rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-5 text-white shadow-xl hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <i className="bx bx-layer text-2xl text-white"></i>
                </div>

                <h4 className="text-3xl font-black">3+</h4>
                <p className="text-sm text-blue-100 mt-2">
                  Production Projects
                </p>

              </div>

              {/* Card 3 */}
              <div className="group rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 p-5 text-white shadow-xl hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <i className="bx bx-bot text-2xl text-white"></i>
                </div>

                <h4 className="text-3xl font-black">AI</h4>
                <p className="text-sm text-emerald-100 mt-2">
                  GenAI & RAG Systems
                </p>

              </div>

              {/* Card 4 */}
              <div className="group rounded-3xl bg-white border border-slate-200 p-5 shadow-lg hover:-translate-y-1 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                  <i className="bx bx-code-block text-2xl text-slate-700"></i>
                </div>

                <h4 className="text-3xl font-black text-slate-900">
                  APIs
                </h4>

                <p className="text-sm text-slate-500 mt-2">
                  Backend & Integrations
                </p>

              </div>

            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default About;