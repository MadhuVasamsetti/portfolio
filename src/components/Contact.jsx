import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_126i9mm",
        "template_9amaccj",
        form.current,
        "tI2tufwXHnl7op7zx"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title">Let's Connect</h2>

      <div className="contact-container">

        {/* LEFT SIDE INFO */}

        <div className="contact-info">

          <div className="info-item">
            <FaEnvelope />
            <span>vasamsettimadhukar@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Andhra Pradesh, India</span>
          </div>

          <div className="info-item">
            <FaGithub />
            <a href="https://github.com/MadhuVasamsetti" target="_blank" rel="noreferrer">
              github.com/MadhuVasamsetti
            </a>
          </div>

          <div className="info-item">
            <FaLinkedin />
            <a href="https://linkedin.com/in/madhukar-vasamsetti-a43623330" target="_blank" rel="noreferrer">
              linkedin.com/madhukar
            </a>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;
