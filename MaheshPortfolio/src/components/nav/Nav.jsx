import {useState} from 'react'
import "./Nav.css"
import menu from "../../assets/menu.png"

import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
    
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='startup' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Startup</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-30} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
                <Link activeClass='active' to='startup' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Startup</Link>
            </div>
    
    </nav>
  )
}

export default Nav