import "../stylesheets/footer.css";
import logo from "../assets/logo.svg";
import insta from "../assets/Instagram - Negative.svg"
import fb from "../assets/facebook.svg"
import Youtube from "../assets/YouTube - Negative.svg"
import twitter from "../assets/Twitter - Negative.svg"
import linkedIn from "../assets/LinkedIn - Negative.svg"


export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="message">
          Increase UX influence in your organization.
        </div>
        <div className="start-button">Get Early Access</div>
      </div>
      <Details />
    </>
  );
}

function Details() {
  return (
    <div className="footer-details">
      <div className="branding">
        <img src={logo} />© 2023 BuildUX
        <div className="polices">
          <div>Security</div>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <div className="links">
        <div>Market Place</div>
        <div>Resources</div>
      </div>
      <div className="contacts">
        <div>Plans and Pricing</div>
        <div>About</div>
        <div>Contact Us</div>
      </div>
      <div className="socials">
        <img src={insta} />
        <img src={Youtube} />
        <img src={fb} />
        <img src={twitter} />
        <img src={linkedIn} />
      </div>
      <div className="socials-mobile">
        <div className="row">
        <img src={insta} />
        <img src={Youtube} />
        </div>
        <div className="row">
        <img src={fb} />
        <img src={linkedIn} />
        </div>
      </div>
    </div>
  );
}
