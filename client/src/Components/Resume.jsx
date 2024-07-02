import { Link } from "react-router-dom";

const Resume = ()=>{

    return(
        <>
        <div className="resume">
        <nav className="navresume">
            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
        </nav>

        <div className="cv">
            <div className='cv2'>
            <img src="/cv.png" alt="cv" className="resumeimg" />
            <a href="/cv.png" download><button className="resumebutton">Download the resume</button></a>
            </div>
        </div>
        </div>
        </>
    )

}

export default Resume