import React,{useState} from 'react'
import { GiHamburgerMenu} from "react-icons/gi";
import { MdClose} from "react-icons/md";
import { ImSun} from "react-icons/im";
import { BsFillMoonFill} from "react-icons/bs";
import logo from '../assets/logo.png'
export default function Navbar() {
    const[navState,setNavState] = useState(false)
  return (
    <nav>
       <div className="brand-container">
        <div className="brand">
            <img src={logo} alt="" />
        </div>
        <div className="toggle-container">
            <div className="toggle"></div>
            <div className="mode"></div>

        </div>
       </div>
        <div className="links-container">
            <ul className="links">
                <li><a href="/features">Features</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/launch">Launch</a></li>
                <li><a href=".signup">SignUp</a></li>
            </ul>
        </div>
    </nav>
  )
}