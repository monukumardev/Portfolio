import "boxicons/css/boxicons.min.css";

import image from "../assets/my-image.jpeg"




const Hero = () => {
  return (
    <main
      id="home"
      className="relative h-screen flex flex-col lg:flex-row items-center justify-center 
                     bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-200 opacity-20 blur-3xl rounded-full"></div>

      {/* LEFT CONTENT */}
      <div className="z-20 w-full lg:w-1/2 px-6 lg:px-20 text-center lg:text-left">
        {/* Name badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full 
                        bg-white border border-gray-200 shadow-sm"
        >
          <i className="bx bx-diamond text-emerald-500"></i>
          <span className="font-semibold text-gray-700">MONU KUMAR</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Full Stack <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
            Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg sm:text-xl max-w-md mx-auto lg:mx-0 mb-8">
          Building clean user interfaces and strong backend systems that scale.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
          {/* Resume Download Button */}
          <a
            href="/resume.pdf" // Replace with your resume file path
            download
            className="px-6 py-3 rounded-full bg-white border border-gray-300 
                       hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Resume
            <i className="bx bx-download text-lg"></i>
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact" // Or use your WhatsApp link: "https://wa.me/919999999999"
            className="px-7 py-3 rounded-full text-white 
                       bg-gradient-to-r from-blue-600 to-emerald-600 
                       hover:opacity-90 transition inline-flex items-center gap-2"
          >
            Hire Me
            <i className="bx bx-arrow-in-up-right-circle text-lg"></i>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE WITH ANIMATION */}
      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 h-[45vh] sm:h-[50vh] lg:h-[80vh] z-10 flex items-center justify-center">
        <img
          src={image}
          alt="Monu Roy"
          className="w-80 h-80 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </main>
  );
};

export default Hero;
