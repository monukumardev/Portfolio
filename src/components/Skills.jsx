function Skills() {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-blue-500 to-green-500 
            bg-clip-text text-transparent tracking-wide">
            My Skills
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Tools and technologies I use to build clean and scalable applications
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* gradient ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                from-blue-400 to-green-400 opacity-0 
                group-hover:opacity-100 blur transition duration-500"></div>

              {/* card */}
              <div className="relative bg-white/70 backdrop-blur-xl 
                rounded-3xl p-8 flex flex-col items-center 
                border border-white/40 shadow-lg 
                transition-all duration-500
                hover:-translate-y-4 hover:scale-105">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-4 
                    transition-transform duration-500 
                    group-hover:scale-110 group-hover:rotate-6"
                />

                <p className="font-semibold text-gray-800">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
