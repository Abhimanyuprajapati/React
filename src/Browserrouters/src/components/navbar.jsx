// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//      <nav>
//         <Link to="/">Home</Link>
//         <Link to="about">About</Link>
//         <Link to="help">Help</Link>
//         <Link to="contact">Contact</Link>
//      </nav>
//     )
//   }
//   export default Navbar;

//   to target the active link 
// we have to write the nav a.active{
     // css properties
// }

// imp one what is the different between "Link" nad "NavLink"
//  so Navlink now that which is the active link
// and link tags does not know the active link

//by using "NavLik"  best approach

import { NavLink } from "react-router-dom";

function Navbar() {
    return (
     <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="contact">Contact</NavLink>
     </nav>
    )
  }
  export default Navbar;


  //  it is another approach 
// import { NavLink } from "react-router-dom";
 
// const isNav=({isActive})=>{
//   return (
//     fontWeight: isActive ?"bold":"normal",
//     textDecoration : isActive ?"none":"underline",
//   );
// };

// function Navbar() {
//     return (
//      <nav>
//         <NavLink style={isNav} to="/">Home</NavLink>
//         <NavLink style={isNav} to="about">About</NavLink>
//         <NavLink style={isNav} to="help">Help</NavLink>
//         <NavLink style={isNav} to="contact">Contact</NavLink>
//      </nav>
//     )
//   }
//   export default Navbar;
