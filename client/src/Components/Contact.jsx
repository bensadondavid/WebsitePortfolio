import { Link } from "react-router-dom";
import ContactUs from "./Contact-form";

const Contact = () => {
  return (
    <>
      <nav className="navabout">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
      </nav>

      <div className="contact">
        <div className="contacttitle">
          <h1>Contact</h1>
          <hr />
        </div>

        <div className="contact-container">
          <div className="form-container">
            <ContactUs />
          </div>

          <div className="networks">
            <h3 className="networktitle">Or on Social Medias!</h3>
            <div className="networksButtons">
              <a target='_blank' href="https://github.com/bensadondavid">
                <button className="Github">
                  <img 
                    className='github-logo' 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    alt="GitHub"
                    style={{ width: '24px', verticalAlign: 'middle' }} 
                  />Github
                </button>
              </a>

              <a target='_blank' href="https://www.facebook.com/profile.php?id=100009577190184">
                <button className="Facebook">
                  <img 
                    className='facebook-logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                  />Facebook
                </button>
              </a>

              <a target='_blank' href="https://www.instagram.com/davidbensadonn">
                <button className="Instagram">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="instagram-logo"
                  />Instagram
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;