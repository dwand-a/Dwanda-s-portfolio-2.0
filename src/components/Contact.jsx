import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have a question or want to work together? I'd love to hear from you.
          Fill out the form below or reach out through any of the contact methods.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="info-item">
            <FaEnvelope className="info-box" />
            <div>
              <h4>Email</h4>
              <p>pennantsd@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-box" />
            <div>
              <h4>Phone</h4>
              <p>+1 (876) 349-9062</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-box" />
            <div>
              <h4>Location</h4>
              <p>May Pen, Clarendon</p>
            </div>
          </div>


          {/* Why Connect Box */}

          <div className="why-connect">
            <h4>Why Connect?</h4>

            <ul>
              <li>Collaborate on exciting projects</li>
              <li>Discuss internship opportunities</li>
              <li>Share knowledge and learn together</li>
              <li>Explore potential partnerships</li>
            </ul>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <div className="contact-form">

          <form>

            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>Subject</label>
            <input type="text" placeholder="What's this about?" />

            <label>Message</label>
            <textarea placeholder="Tell me more about your message..." rows="5"></textarea>

            <button className="send-btn">
              <FaPaperPlane /> Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
