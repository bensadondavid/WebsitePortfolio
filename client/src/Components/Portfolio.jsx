import { Link } from "react-router-dom";


const Portfolio = () => {
  
  
return (
    <>
    <nav className="navabout">
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </nav>

    <div className="contact">

      <div className="contacttitle">
        <h1>Currenty building this section</h1>
        <hr/>
       </div>

    </div>
    </>
)
}

export default Portfolio