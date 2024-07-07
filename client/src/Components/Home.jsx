import react from "react";
import { Link } from 'react-router-dom' 
import './stars.scss';

const Home = () => {

    return(
        <>
       
            <div className="firstpage">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="title"></div>
                <nav>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div className="Home">
                <div className="Presentation">
                    <h1 className="firstphrase">Hello, my name is</h1>
                    <h1 className="name">David Bensadon.</h1> 
                    <h2>I'm a Full-stack web developper.</h2>
                </div>
                <Link to='/portfolio'><button className="portfoliobutton">View Portfolio</button></Link>
                </div>
        </div>
        </>
    )
};

export default Home;