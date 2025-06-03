import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook}

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

            <FontAwesomeIcon icon={faFacebook} />
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
