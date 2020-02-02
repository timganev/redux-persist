import React from "react";
import { Navbar as Nav } from "react-materialize";

function Navbar() {
  const links = (
    <ul className="right">
      <li>
        <a className="head-link" href="#favorites">
          Favorites
        </a>
      </li>
      <li>
        <a className="head-link" href="#footer">
          Contacts
        </a>
      </li>
    </ul>
  );

  return (
    <Nav
      centerLogo
      className="grey darken-3"
      alignLinks="right"
      fixed="true"
      brand={
        <a href="#navbar" className="brand-logo">
          ReduxApp
        </a>
      }
      sidenav={
        <div className="user-view">
          <div className="background">
            <img src="https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2019/10/shutterstock_1479789158.jpg?width=640" />
          </div>
          {links}
        </div>
      }
    >
      {links}
    </Nav>
  );
}

export default Navbar;
