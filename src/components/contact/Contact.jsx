import React, { useState } from "react";
import "./Contact.css";
import CurvedLoop from './CurvedLoop';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mrblzkbl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact-wrapper">
      <CurvedLoop 
        marqueeText="Slide ✦ Into ✦ My ✦ Inbox ✦ "
        speed={2}
        curveAmount={300}
        direction="right"
        interactive={false}
        className="custom-text-style"
        />
        


      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            autoComplete="off"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>

        {status === "SUCCESS" && (
          <p className="form-status success">Boom 💥 Your message just time-traveled to my inbox!</p>
        )}
        {status === "ERROR" && (
          <p className="form-status error">Oops. That’s not supposed to happen 😬</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
