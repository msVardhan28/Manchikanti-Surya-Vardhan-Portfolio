import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:suryavardhan@gmail.com" data-cursor="disable">
                msuryavardhan@gmail.com
              </a>
            </p>
            <h4>Mobile</h4>
<p>
  <a
    href="tel:+919676810809"
    data-cursor="disable"
    className="contact-call-button"
  >
    Call +91 96768 10809
  </a>
</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/manchikanti-surya-vardhan-485581211"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/vardhansurya28?igsh=NzRnZzBuMXFzc3Bj"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
          <h2>
  Designed and Developed <br />
  by <span>Manchikanti Surya Vardhan</span>
  <br />
  <br />
  <small>Template by Rajesh Chityal</small>
  <br />
  <a
    href="https://github.com/raxx21"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="disable"
    className="contact-social"
  >
    github.com/raxx21 <MdArrowOutward />
  </a>
</h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
