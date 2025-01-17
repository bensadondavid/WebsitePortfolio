import { Link } from "react-router-dom";
import homefinder from '/public/homefinder.png';
import serenewaves from '/public/serenewaves.png';
import todolist from '/public/todolist.png';
import wordsgame from '/public/wordsgames.png';
import magicslate from '/public/magicslate.png';
import esthair from '/public/esthair.png';

const Portfolio = () => {
  const style = {
    width: '25vw',
    height: '50%',
  };

  return (
    <>
      <nav className="navabout">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <div className="portfolio">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
          <hr />
        </div>
        <div className="portfolio-container">
          <div className="project1" style={style}>
            <img src={homefinder} className="imgh" />
            <a href="https://finalproject-8557.onrender.com" target="_blank">
              <button className="buttonh">See</button>
            </a>
          </div>
          <div className="project2" style={style}>
            <img src={serenewaves} className="imgh" />
            <a href="https://serenewaves.onrender.com" target="_blank">
              <button className="buttonh">See</button>
            </a>
          </div>
          <div className="project3" style={style}>
            <img src={esthair} className="imgh" />
            <a href="https://est-hair.onrender.com" target="_blank">
              <button className="buttonh">See</button>
            </a>
          </div>
          <div className="project4" style={style}>
            <img src={todolist} className="imgh" />
            <a href="https://todolist-z28p.onrender.com" target="_blank">
              <button className="buttonh">See</button>
            </a>
          </div>
          <div className="project5" style={style}>
            <img src={magicslate} className="imgh" />
            <a href="https://di-bootcamp-ms.onrender.com" target="_blank">
              <button className="buttonh">See</button>
            </a>
          </div>
          <div className="project6" style={style}>
            <img src={wordsgame} className="imgh" />
            <a href="https://portfolio-wordsgame.onrender.com" target="_blank">
              <button className="buttonh">See</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;