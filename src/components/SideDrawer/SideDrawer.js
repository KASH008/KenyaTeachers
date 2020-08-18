import React from 'react';
import './SideDrawer.css';
import NavigationLinks from '../iterate/link';
const SideDrawer = () => (
  <nav className="side-drawer">
    <ul>
      <NavigationLinks />
    </ul>
  </nav>
);
export default SideDrawer;
