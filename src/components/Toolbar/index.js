import React from 'react';
import './index.css';
import NavigationLinks from '../iterate';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const Toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <DrawerToggleButton />
      <div className="toolbar__logo">
        <a href="/../images/logo2.png">KenyaTeachers</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <NavigationLinks />
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;
