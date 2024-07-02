import { Link } from "react-router-dom";
import ContactUs from "./Contact-form";

const Contact = () => {
  
  
return (
    <>
    <nav className="navabout">
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/resume'>Resume</Link>
    </nav>

    <div className="contact">

      <div className="contacttitle">
        <h1>Contact</h1>
        <hr/>
       </div>

       <div className="form-container">
        <ContactUs/>
       </div>
       
    </div>

    </>
  );
};

export default Contact;