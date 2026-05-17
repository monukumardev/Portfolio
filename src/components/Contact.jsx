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
          setStatus("Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        () => {
          setStatus("Failed to send. Please try again.");
          setIsSending(false);
        }
      );
  };

  const contactLinks = [
    { text: "LinkedIn", link: "https://www.linkedin.com", icon: "bx bxl-linkedin", color: "from-blue-600 to-blue-400" },
    { text: "roy.monu.2001@gmail.com", link: "mailto:roy.monu.2001@gmail.com", icon: "bx bx-envelope", color: "from-red-500 to-orange-400" },
    { text: "+91 7319811232", link: "tel:+917319811232", icon: "bx bx-phone", color: "from-green-500 to-teal-400" },
    { text: "GitHub", link: "https://github.com", icon: "bx bxl-github", color: "from-gray-800 to-gray-500" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center
        bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden px-4 py-16"
    >
      {/* Background blobs */}
      <div className="absolute top-10 left-[-5%] w-72 h-72 bg-emerald-200/40 blur-[80px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-[-5%] w-72 h-72 bg-blue-200/40 blur-[80px] rounded-full animate-pulse"></div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left - Info Cards */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Monu Kumar</h3>
            <p className="text-gray-600 text-sm">
              Full Stack Developer <br />
              Open for jobs & freelance
            </p>
          </div>

          <div className="grid gap-4">
            {contactLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl
                  bg-white/70 backdrop-blur-md shadow-lg
                  hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center
                    rounded-full bg-gradient-to-r ${item.color} text-white text-xl`}
                >
                  <i className={`${item.icon}`}></i>
                </div>
                <span className="font-medium text-gray-700 text-sm">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form Card */}
        <div className="relative">
          <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 overflow-hidden">
            {/* Floating icons */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/40 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-green-500/30 rounded-full animate-pulse"></div>

            <h3 className="text-2xl font-bold mb-3 text-gray-800">Let's Connect!</h3>
            <p className="text-gray-600 text-sm mb-6">
              I’d love to hear from you. Whether you have a project idea, opportunity, or just want to say hi, feel free to drop a message!
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-xs transition-all peer-focus:-top-3 peer-focus:text-blue-500 peer-valid:-top-3">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-xs transition-all peer-focus:-top-3 peer-focus:text-blue-500 peer-valid:-top-3">
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="3"
                  required
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <label className="absolute left-0 top-2 text-gray-500 text-xs transition-all peer-focus:-top-3 peer-focus:text-blue-500 peer-valid:-top-3">
                  Message
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-full text-white font-semibold
                  bg-gradient-to-r from-blue-500 to-green-500 shadow-lg hover:shadow-2xl
                  hover:scale-[1.03] transition-all duration-300"
              >
                {isSending ? "Sending..." : "Send Message 🚀"}
              </button>

              {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;