import { Link } from "react-router-dom";

const About = () => {
  
  
return (
    <>
    <nav className="navabout">
      <Link to='/'>Home</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </nav>

    <div className="about">

      <div className="title">
        <h1>About</h1>
        <hr/>
       </div>

       <div className="myprinciples">
          <div className="hexagons">
            <div className="hp">
            <div className="hexagon1"></div>
            <h3>Fast</h3>
            <p>Fast load times and lag free interaction, my highest priority.</p>
            </div>
            <div className="h&p">
            <div className="hexagon2"></div>
            <h3>Intuitive</h3>
            <p>
            Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
            <div className="h&p">
            <div className="hexagon3"></div>
            <h3>Dynamic</h3>
            <p>
            Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
       </div>

       <div className="description">
       <p className="firstp">Hey ! I’m David Bensadon, a passionate web developer with a diverse background in both front-end and back-end technologies.
         With a scientific baccalaureate and a bachelor’s degree in Economics, I transitioned into the tech world through a comprehensive
        Full Stack Web Development Boot Camp at the Developer Institute in Ramat Gan.</p>
        <br />
       <p>I am proficient in HTML, CSS, JavaScript, React, and TypeScript for front-end development, and Node.js, Express, and Python 
        for back-end development. My database management skills include working with PostgreSQL, and I am well-versed in Git, REST APIs, 
        and Redux. I am also fluent in French, proficient in English, and have a good command of Hebrew.</p>
       </div>
       
    </div>

    </>
  );
};

export default About;