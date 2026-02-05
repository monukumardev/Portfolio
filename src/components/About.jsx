import React from "react";

const About = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      // { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-emerald-50"
    >
      {/* Soft background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold 
              bg-gradient-to-r from-blue-600 to-emerald-600 
              bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Passionate Full Stack Developer building modern web apps with React, Django, and other modern technologies.
          </p>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Text */}
          <div className="lg:w-1/2 text-gray-700 space-y-5">
            <p>
              Hi! I’m <span className="font-semibold text-gray-900">Monu Kumar</span>, a Full Stack Developer with hands-on experience in building responsive and user-friendly web applications.
            </p>
            <p>
              I specialize in creating **scalable frontends using React and Tailwind**, while building **robust backends with Django and MySQL**. I also work with REST APIs, authentication systems, and deploy applications using Docker.
            </p>
            <p>
              I love converting ideas into real applications that help clients and businesses grow.
            </p>
          </div>

          {/* Right: Skills */}
          <div className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 
                           bg-gradient-to-tr from-blue-100 to-emerald-100 
                           rounded-2xl shadow-md hover:scale-110 transition"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 mb-2"
                />
                <p className="text-sm font-medium text-gray-800 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
