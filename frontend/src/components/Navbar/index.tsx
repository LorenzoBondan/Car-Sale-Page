import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">

        <div className='logo-container'>
          <Link to="/" className="nav-logo-text">
            <h1>Carros Top</h1>
          </Link>
        </div>
        
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#carrostop-navbar"
            aria-controls="carrostop-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className='navbar-toggler-icon'></span>
        </button>
        

        <div className="collapse navbar-collapse list-items" id="carrostop-navbar">

            <ul className='navbar-nav offset-md-2 main-menu'>
                <li>
                    <NavLink to="/" activeClassName='active' exact>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/products" activeClassName='active'>Catálogo</NavLink>
                </li>
            </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
