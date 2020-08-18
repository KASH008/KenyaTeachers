import React, { Component } from 'react';

class NavigationLinks extends Component {
  render() {
    let links = [
      { label: 'landing', link: '/' },
      { label: 'home', link: '/' },
      { label: 'products', link: '/' },
      { label: 'users', link: '/' },
    ];

    return (
      <div className="links-menu">
        <navigate links={links} />
      </div>
    );
  }
}
export default NavigationLinks;
