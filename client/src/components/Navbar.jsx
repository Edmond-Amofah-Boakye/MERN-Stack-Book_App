import React, { useContext } from "react";
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import { fetchedDataContext } from "../store/Context";

function Navbar() {
  
  const { handleLogout, isLoggedIn} = useContext(fetchedDataContext)
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="logo">
            <Link to='/'><h2>Book Store</h2></Link>
          </div>
          <div className="nav-link">
            <ul>
                <li><Link to='/'>Home</Link></li>
                {isLoggedIn && <li><Link to='/books'>Books</Link></li>}
                {isLoggedIn && <li><Link to='/products'>Add Book</Link></li>}
                {isLoggedIn ? (
                  <li onClick={handleLogout}><Link to='/' className="login">Logout</Link></li>
                ) : (<>
                  <li ><Link to='/login' className="login">Login</Link></li>
                </>)}
                {isLoggedIn && <li><Link to='/signup' className="account">Create Account</Link></li>}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
