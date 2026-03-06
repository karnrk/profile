import { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeaderSection from '../HeaderSection';
import Resume from '../../pdf/Resume.pdf';
function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ih2nq5m",
        "template_bz8cjds",
        form.current,
        "rq0bgYDDAVYTAbYvd"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };
  return (
    <>
      <HeaderSection prefix="Contact details" titlestart="Resume and Contact" titleend="Details"/>
      <section className="py-20 bg-gray-900 text-white mt-5" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Contact Details */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-400 mb-6">
            If you have a project, opportunity, or just want to say hello,
            feel free to send me a message.
          </p>

          <div className="space-y-4">
            <p><strong>Email:</strong> <a href="mailto:karnrk5@gmail.com"><i class="fa-solid fa-envelope"></i> karnrk5@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="+91 9205009528"><i class="fa-solid fa-phone"></i> +91 9205009528</a></p>
            <p><strong>Location:</strong> India</p>
            <div className="flex gap-4 mt-6 flex-wrap">
              <a href="https://github.com/karnrk" target="_blank" rel="noopener noreferrer" className="flex flex-wrap items-center gap-1"><i class="article-inline-list-item-icon fa-brands fa-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/karnrk5/" target="_blank" rel="noopener noreferrer" className="flex flex-wrap items-center gap-1"><i class="fa-brands fa-square-linkedin"></i> LinkedIn</a>
              <a href={Resume} target="_blank" rel="noopener noreferrer" download={true} className="flex flex-wrap items-center gap-1"><i class="fa-solid fa-file"></i> Download Resume</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 h-50 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded font-semibold cursor-pointer"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
    </>
  )
}

export default Contact
