import { Link } from "react-router-dom";
import homefinder from '/src/homefinder.png'
import serenewaves from  '/src/serenewaves.png'
import todolist from  '/src/todolist.png'
import wordsgame from  '/src/wordsgames.png'
import magicslate from  '/src/magicslate.png'
import esthair from'/esthair.png'


const Portfolio = () => {
  
  const style1 = {
    width: '25vw',
    height: '50%',
  }
  const style2 = {
    width: '25vw',
    height: '50%',
  }
  const style3 = {
    width: '25vw',
    height: '50%',
  }
  const style4 = {
    width: '25vw',
    height: '50%',
  }
  const style5 = {
    width: '25vw',
    height: '50%',
  }
  const style6 = {
    width: '25vw',
    height: '50%',
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
        <div className="project1" style={style1}>
          <img src={homefinder} className="imgh" />
          <a href="https://portfolio-front-v8uq.onrender.com" target="_blank"><button className="buttonh">See</button></a>
          </div>
        <div className="project2" style={style2}>
        <img src={serenewaves} className="imgh" />
          <a href="https://serenewaves.onrender.com" target="_blank"><button className="buttonh">See</button></a>
          </div>
        <div className="project3" style={style3}>
        <img src={esthair} className="imgh" />
          <a href="https://est-hair.onrender.com" target="_blank"><button className="buttonh">See</button></a>
          </div>
        <div className="project4" style={style4}>
        <img src={todolist} className="imgh" />
          <a href="https://todolist-z28p.onrender.com" target="_blank"><button className="buttonh">See</button></a>
          </div>
        <div className="project5" style={style5}>
        <img src={magicslate} className="imgh" />
          <a href="https://di-bootcamp-ms.onrender.com" target="_blank"><button className="buttonh">See</button></a>
          </div>
        <div className="project6" style={style6}>
        <img src={wordsgame} className="imgh" />
          <a href="https://portfolio-wordsgame.onrender.com" target="_blank" ><button className="buttonh">See</button></a>
          </div>
       </div >
    </div>
    </>
)
}

export default Portfolio