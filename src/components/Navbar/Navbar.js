import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <div>
      <nav className='navbar'>
        <Link exact='true' to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
        <div className={clicked ? "showNavlinks" : "removeNavlinks"}>
          <Link exact='true' to='/' className='navlink'>
            Home
          </Link>
          <Link to='/about' className='navlink'>
            About
          </Link>
          <Link to='/contact' className='navlink'>
            Contact
          </Link>
          <Link to='/blog' className='navlink'>
            Blog
          </Link>
          <Link to='/careers' className='navlink'>
            Careers
          </Link>
        </div>
        <Link to='/request-invite'>
          <button className='navButton'>Request Invite</button>
        </Link>

        <div className='hamburger' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar

// import React, { Component } from "react";
// import {Button}  from "../Button";
// import { MenuItems } from "./Menuitems";
// import "./Navbar.css";

// export default class Navbar extends Component {
//   state = { clicked: false }

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked })
//   }
//   render() {
//     return (
//       <>
//         <nav className='NavbarItems'>
//           <h1 className='navbar-logo'>
//             React <i className='fab fa-react'></i>
//           </h1>
//           <div className='menu-icon' onClick={this.handleClick}>
//             <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//             />
//           </div>
//           <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
//             {MenuItems.map((item, id) => {
//               return (
//                 <li key={id}>
//                   <a className={item.cName} href={item.url}>
//                     {item.title}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//           <Button>Sign Up</Button>
//         </nav>
//       </>
//     );
//   }
// }
