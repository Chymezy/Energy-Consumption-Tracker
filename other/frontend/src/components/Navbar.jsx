// // // src/components/Navbar.jsx

// // import React, { useState } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faBars } from '@fortawesome/free-solid-svg-icons';
// // import '../styles/Navbar.css';
// // import logo from '../assets/react.svg'; // Assuming you have a logo image in the assets folder

// // const Navbar = ({ isLoggedIn, onLogout }) => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="logo">
// //         <img src={logo} alt="Energy Manager" />
// //         <span>Energy Manager</span>
// //       </div>
// //       <div className="nav-links">
// //         <a href="#features">Features</a>
// //         <a href="#about">About</a>
// //         <a href="#contact">Contact</a>
// //         {!isLoggedIn && <a href="#login">Login</a>}
// //         {isLoggedIn && (
// //           <div className="menu">
// //             <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
// //             {menuOpen && (
// //               <div className="dropdown-menu">
// //                 <a href="/profile">View Profile</a>
// //                 <a href="/settings">Settings</a>
// //                 <a href="/" onClick={onLogout}>Logout</a>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Navbar.css';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="logo.png" alt="Logo" />
//         <span>Energy Manager</span>
//       </div>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/features">Features</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         {!isLoggedIn && <Link to="/login">Login</Link>}
//         {isLoggedIn && (
//           <>
//             <div className="menu-icon" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faBars} />
//             </div>
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" onClick={toggleDropdown}>View Profile</Link>
//                 <Link to="/settings" onClick={toggleDropdown}>Settings</Link>
//                 <a href="#" onClick={onLogout}>Logout</a>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <span>Energy Manager</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && (
          <>
            <div className="menu-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" onClick={toggleDropdown}>View Profile</Link>
                <Link to="/settings" onClick={toggleDropdown}>Settings</Link>
                <a href="#" onClick={onLogout}>Logout</a>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

