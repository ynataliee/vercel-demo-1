import { useState } from "react";
import "../../styles/navbar.css"

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li className="dropdown" onClick={toggleDropdown}>
                    <a href="/AboutUs">About Us</a>
                    <ul className={showDropdown ? "dropdown-content show" : "dropdown-content"}>
                        <li><a href="/AboutUs/Westley">Westley</a></li>
                        <li><a href="/AboutUs/Angelo">Angelo</a></li>
                        <li><a href="/AboutUs/Arianna">Arianna</a></li>
                        <li><a href="/AboutUs/Natalie">Natalie</a></li>
                        <li><a href="/AboutUs/Bryan">Bryan</a></li>
                        <li><a href="/AboutUs/Michelle">Michelle</a></li>
                    </ul>
                    <a href="/TestPage">Test Page</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;