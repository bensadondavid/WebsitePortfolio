import { Link } from "react-router-dom";
import homefinder from '/src/homefinder.png'
import serenewaves from  '/src/serenewaves.png'
import todolist from  '/src/todolist.png'
import wordsgame from  '/src/wordsgames.png'
import magicslate from  '/src/magicslate.png'
import robofriends from  '/src/robofriends.png'


const Portfolio = () => {
  
  const style1 = {
    width: '25vw',
    height: '50%',
    backgroundImage: `url(${homefinder})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const style2 = {
    width: '25vw',
    height: '50%',
    backgroundImage: `url(${serenewaves})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const style3 = {
    width: '25vw',
    height: '50%',
    backgroundImage: `url(${robofriends})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const style4 = {
    width: '25vw',
    height: '50%',
    backgroundImage: `url(${todolist})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const style5 = {
    width: '25vw',
    height: '50%',
    backgroundImage: `url(${magicslate})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const style6 = {
    width: '25vw',
    height: '50%',
    backgroundImage: `url(${wordsgame})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  
  
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
        <div className="project1" style={style1}></div>
        <div className="project2" style={style2}></div>
        <div className="project3" style={style3}></div>
        <div className="project4" style={style4}></div>
        <div className="project5" style={style5}></div>
        <div className="project6" style={style6}></div>
       </div >

    </div>
    </>
)
}

export default Portfolio