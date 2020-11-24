import React, { Component } from 'react';
import { Link } from "@reach/router";

class Navbar extends Component {
    state = {clicked: false}




    render() {
        return(
            <nav className='NavbarItems'>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/users'>Users</Link>
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