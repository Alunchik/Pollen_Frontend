import React from "react";
import "../style/Header.css"

function Header(){
    return(
        <header>
            <nav>
                <ul className="header-nav">
                    <li>
                        <a className="nav-ref" href="/">Login</a>
                    </li>
                    <li>
                        <a className="nav-ref" href="/registration">Registration</a>
                    </li>
                    <li>
                        <a className="nav-ref" href="/main">Main</a>
                    </li>
                    <li>
                        <a className="nav-ref" href="/create">New poll</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;