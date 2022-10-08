import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav>
            <img className="profile-pic"  src="images/foto2.JPG" alt="foto diri" />
            <div className="nav-links">
                <Link to="/"><button class="button-49" role="button">Home</button></Link>
            </div>
            <div className="nav-links">
                <Link to="/about"><button class="button-49" role="button">About</button></Link>
            </div>
            <div className="nav-links">
                <Link to="/awards"><button class="button-49" role="button">Awards</button></Link>
            </div>
            <div className="nav-links">
                <Link to="/education"><button class="button-49" role="button">Education</button></Link>
            </div>
            <div className="nav-links">
                <Link to="/experience"><button class="button-49" role="button">Experience</button></Link>
            </div>
            <div className="nav-links">
                <Link to="/interests"><button class="button-49" role="button">Interests</button></Link>
            </div>
            <div className="nav-links">
                <Link to="/skills"><button class="button-49" role="button">Skills</button></Link>
            </div>
        </nav>
    );
}

export default Navbar;