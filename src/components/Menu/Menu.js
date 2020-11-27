import React from 'react'
import {Link} from 'react-router-dom'
import { StyledMenu } from './menu.styled';

const Navbar = ({open}) => {
    

    return (
        <StyledMenu open={open}>
            
            <li><Link to="/">Logo</Link></li>
        
            <li>
                <Link to="/">Watch List</Link>
            </li>
            <li>
                <Link to="/watched">Watched</Link>
            </li>
            <li>
                <Link to="/add">+ADD</Link>  
            </li>
               
        </StyledMenu>
    )
}

export default Navbar
