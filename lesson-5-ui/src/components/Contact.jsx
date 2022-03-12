import {Link} from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact">
             <nav>
        <Link to="/">Main</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </nav> 
            <h3>Contact Page</h3>
        </div>
    );
}