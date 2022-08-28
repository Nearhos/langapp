import './navbar.css';
import glogo from '../svgs/glogo.svg';
export default function Navbar(){
    return(
        <nav className="nav">
            <img src={glogo} className="App-logo" alt="logo" style={{height: '90px', padding: "10px",}} />
            <a href="/" className="site-title">
                Glossa
            </a>
            <ul>
                <li>
                    <a href="/about">Our Future</a>
                    </li>
                    <li>
                    <a href="/Login">Chat</a>
                </li>
            </ul>
        </nav>
    )
}