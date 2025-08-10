import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="cont-footer">
          <div className="footer-col">
            <h4>About us</h4>
            <p>Distributors</p>
            <p>Work With Us</p>
            <p>Our Stores</p>

            <div className="social-media">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div className="footer-col">
            <h4>Insterest Links</h4>
            <p>Apply for your credit</p>
            <p>Customer Service</p>
            <p>Legal notices</p>
            <p>Frequently Asked Questions</p>
          </div>
          <div className="footer-col">
            <h4>Policies</h4>
            <p>Terms and Conditions</p>
            <p>Privacy Notice</p>
            <p>Data Protection Policy</p>
            <p>Cookie Usage Policy</p>
            <p>Commercial Exchange Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}
