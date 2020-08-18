import React from 'react';
import './career.css';
import Intership from './internship';
import Scholarship from './scholarships';
import Vacancies from './vacancies';

import { compose } from 'recompose';
import Toolbar from '../Toolbar';
import Footer from '../Footer';

import { withAuthorization, withEmailVerification } from '../Session';

const Career = () => (
  <div className="news">
    <Toolbar />
    <div className="left-home">
      <div className="left-home-top"></div>
      <div className="left-home-bottom"></div>
    </div>
    <div className="centre-home">
      <div className="centre-home-top">
        <Vacancies />
      </div>
      <div className="centre-home-bottom">
        <Intership />
      </div>
    </div>

    <div className="right-home">
      <Scholarship />
    </div>
    <div className="bottom-flex">
      <div className="bottom-flex-1"></div>
      <div className="bottom-flex-2"></div>
      <div className="bottom-flex-3"></div>
    </div>

    <Footer />
  </div>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Career);
