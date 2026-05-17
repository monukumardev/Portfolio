import "boxicons/css/boxicons.min.css";
import image from "../assets/my-image.jpeg";
import cv from "../assets/Monu-kumar_Resume.pdf";

const Hero = () => {
  return (
    <main
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden pt-24 lg:pt-20"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-[-5%] w-72 h-72 bg-emerald-200/40 blur-[80px] rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-10 right-[-5%] w-72 h-72 bg-blue-200/40 blur-[80px] rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:scale-105 transition duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-gray-700 uppercase">
              Monu Kumar
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
            Full Stack <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-md mb-6 leading-relaxed">
            Building scalable web applications, intelligent backend systems, and AI-powered solutions using modern technologies and Generative AI workflows.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
            {["React", "Django", "LangChain", "Ollama"].map((tech, index) => (
              <span
                key={index}
                className="group relative px-5 py-2 rounded-full text-sm font-semibold
      bg-white/70 backdrop-blur-md border border-gray-200
      shadow-sm hover:shadow-lg
      hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* glow background on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition duration-300"></span>

                {/* small dot indicator */}
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></span>

                <span className="relative z-10 text-gray-700 group-hover:text-gray-900 transition">
                  {tech}
                </span>
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={cv}
              download
              className="group px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              Download CV
              <i className="bx bx-download text-lg group-hover:animate-bounce"></i>
            </a>

            <a
              href="#contact"
              className="group px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-emerald-500 shadow-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              Hire Me
              <i className="bx bx-arrow-in-up-right text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-md">
            <div className="bg-white/80 rounded-2xl p-4 shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-600">10+</h3>
              <p className="text-xs text-gray-500">Projects</p>
            </div>

            <div className="bg-white/80 rounded-2xl p-4 shadow-md text-center">
              <h3 className="text-xl font-bold text-emerald-500">1+</h3>
              <p className="text-xs text-gray-500">Years Exp</p>
            </div>

            <div className="bg-white/80 rounded-2xl p-4 shadow-md text-center">
              <h3 className="text-xl font-bold text-teal-500">100%</h3>
              <p className="text-xs text-gray-500">Dedicated</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
          <div className="relative group">
            <div
              className="absolute -inset-6 rounded-[40px] border-2 border-dashed border-emerald-300 animate-spin"
              style={{ animationDuration: "12s" }}
            ></div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative bg-white p-2 rounded-3xl shadow-2xl group-hover:-translate-y-2 transition duration-500">
              <img
                src={image}
                alt="Monu Kumar"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl"
              />

              

              <div className="absolute -top-5 -right-5">

  {/* soft glow background */}
  <div className="absolute w-12 h-12 rounded-2xl bg-emerald-400/10 blur-xl"></div>

  {/* main card */}
  <div
    className="relative w-12 h-12 flex items-center justify-center
               bg-white/80 backdrop-blur-xl
               border border-gray-100
               rounded-2xl shadow-lg
               hover:shadow-xl hover:-translate-y-1
               transition-all duration-300"
  >
    <i className="bx bx-bulb text-2xl text-emerald-600"></i>
  </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
