import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_353hzlc",
        "template_gcw1rkn",
        form.current,
        "Lwa3BZVkZhAxxbwW_"
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          setIsSending(false);
          form.current.reset();
        },
        () => {
          setStatus("Failed to send. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center
      bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-blue-500 to-green-500
            bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Open for jobs & freelance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Monu Kumar
              </h3>
              <p className="text-gray-500 text-sm">
                Full Stack Developer
              </p>
            </div>

            <div className="space-y-4">
              {[
                { text: "LinkedIn", link: "https://www.linkedin.com", icon: "linkedin" },
                { text: "roy.monu.2001@gmail.com", link: "mailto:roy.monu.2001@gmail.com", icon: "google" },
                { text: "+91 7319811232", icon: "phone" },
                { text: "GitHub", link: "https://github.com", icon: "github" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-3 p-4
                  rounded-xl bg-white/80 backdrop-blur
                  shadow hover:shadow-lg
                  transition hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 flex items-center justify-center
                    rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
                    {item.icon !== "phone" ? (
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original.svg`}
                        className="w-4 h-4"
                      />
                    ) : (
                      <span>📞</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/80 backdrop-blur
            rounded-2xl p-8 shadow-xl border border-white/40">

            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Send Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full border-b border-gray-300
                  bg-transparent py-2 text-sm
                  focus:outline-none focus:border-blue-500"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-xs
                  transition-all peer-focus:-top-3 peer-focus:text-blue-500
                  peer-valid:-top-3">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full border-b border-gray-300
                  bg-transparent py-2 text-sm
                  focus:outline-none focus:border-blue-500"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-xs
                  transition-all peer-focus:-top-3 peer-focus:text-blue-500
                  peer-valid:-top-3">
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="3"
                  required
                  className="peer w-full border-b border-gray-300
                  bg-transparent py-2 text-sm
                  focus:outline-none focus:border-blue-500"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-xs
                  transition-all peer-focus:-top-3 peer-focus:text-blue-500
                  peer-valid:-top-3">
                  Message
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-2.5 rounded-full
                text-sm font-semibold text-white
                bg-gradient-to-r from-blue-500 to-green-500
                shadow hover:shadow-md hover:scale-[1.02]
                transition"
              >
                {isSending ? "Sending..." : "Send Message 🚀"}
              </button>

              {status && (
                <p className="text-center text-xs text-green-600">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
