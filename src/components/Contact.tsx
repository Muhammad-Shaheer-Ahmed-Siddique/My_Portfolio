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
              <a href="shaheershafique567@gmail.com" data-cursor="disable">
                shaheershafique567@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+92 3168727215" data-cursor="disable">
                +92 3168727215
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Muhammad-Shaheer-Ahmed-Siddique"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-shaheer-ahmed-siddique/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Muhammad Shaheer Ahmed Siddique</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Muhammad Shaheer Ahmed Siddique. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
