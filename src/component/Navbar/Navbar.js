import "./Navbar.css"

import { Link } from "react-router-dom";


export default function Navbar(){
return (
    <>
    <div className="nav">
    <h1 className="brand">Bandini</h1>
    
    <div className="menu-text">

    <Link to="/about" className="menu">ABOUT</Link>
        <Link to="/" className="menu">HOME</Link>
        <Link to="/contact" className="menu">CONTACT</Link>
   
    </div>
    </div>
    <div className="events">
    <li className="list-items">Anniversaries</li>
    <li className="list-items">Birthdays</li>
    <li className="list-items">Baby Showers</li> 
    <li className="list-items">Festivals</li>
    </div>
    <hr  className="hr"/>
    </>

  
)
}