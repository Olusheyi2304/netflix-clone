import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="icons" />
        <img src={twitter_icon} alt="icons" />
        <img src={instagram_icon} alt="icons" />
        <img src={facebook_icon} alt="icons" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Contact Us</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
      </ul>
      <p className="copyright-text">© 1997-2003 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
