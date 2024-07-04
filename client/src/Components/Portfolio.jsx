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

    <div className="portfolio">

      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <hr/>
       </div>

       <div className="portfolio-container">
        <div className="project1"></div>
        <div className="project2"></div>
        <div className="project3"></div>
        <div className="project4"></div>
        <div className="project5"></div>
        <div className="project6"></div>
       </div >

    </div>
    </>
)
}

export default Portfolio