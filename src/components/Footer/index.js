import React from 'react';
import './index.css';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <h2>QUICK LINKS</h2>
    <ul>
      <li>
        <a href="https://www.tsc.go.ke/">TSC </a>
      </li>
      <li>
        <a href="https://www.knec.ac.ke/">KNEC</a>
      </li>
      <li>
        <a href="https://www.education.go.ke/">
          Ministry Of Education{' '}
        </a>
      </li>
      <li>
        <a href="https://www.hudumakenya.go.ke/"> Huduma Kenya</a>
      </li>
      <li>
        <a href="https://www.ecitizen.go.ke/"> eCitizen</a>
      </li>
      <li>
        <a href="https://kicd.ac.ke/">KICD</a>
      </li>
    </ul>
    <coprght>
      <p>© 2019 - Republic of Kenya - All Rights Reserved</p>
      <Link to={ROUTES.TERMS} className="termlink">
        Terms
      </Link>
    </coprght>
  </div>
);
export default Footer;
