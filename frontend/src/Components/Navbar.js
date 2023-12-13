import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavHeader = (props) => {
  if (props.location.pathname === '/GeoConnect') {
    return false;
  }

  return (
    <Navbar collapseOnSelect expand="lg">
      <Link to="/" style={{ color: 'yellow' }} className="navbar-brand logo">
        GeoConnect
      </Link>

       <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto links">
          <Link to="/" style={{ color: '#EF9273' }} className="nav-link">
            Home
          </Link>

          <Link to="/login" style={{ color: '#EF9273' }} className="nav-link">
            Login
          </Link>

          <Link to="/register" style={{ color: '#EF9273' }} className="nav-link">
            Register
          </Link>
          <Link to="/feedback" style={{ color: '#EF9273' }} className="nav-link">
            Feedback
          </Link>
          <Link to="/deleteuser" style={{ color: '#EF9273' }} className="nav-link">
            Delete Account
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavHeader);
