import React, { Component } from 'react';
import { Link } from "@reach/router";
import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false}




    render() {
        return(
            <nav>
                <ul>
                    <Link style={{margin: '10px'}} to='/'>Home</Link>
                    <Link style={{margin: '10px'}} to='/posts'>Posts</Link>
                    <Link style={{margin: '10px'}} to='/users'>Users</Link>
                </ul>
            </nav>
        )
    }
}

// {MenuItems.map((item, index) => {
//     return(
//         <li key={index}>
//             <a className={item.cName} href={item.url}>
//                 {item.title}
//             </a>
//         </li>
//     )
// })}

export default Navbar;