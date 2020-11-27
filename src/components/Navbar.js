import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
    const hamburger = () => {
        document.getElementById('btn').classList.toggle('active')
    }

    return (
        <nav>
            <ul>
                <span>
                    <li><Link to="/">Logo</Link></li>
                </span>
                <span>
                    <li>
                        <Link to="/">Watch List</Link>
                    </li>
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                    <li>
                        <Link to="/add">+ADD</Link>  
                    </li>
                </span>
            </ul>
            <button 
                id="btn"
                onClick={() => hamburger}
                >🍔</button>
        </nav>
    )
}

export default Navbar
