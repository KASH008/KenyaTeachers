import React from 'react';
import { compose } from 'recompose';
import Toolbar from '../Toolbar';
import Footer from '../Footer';

import { withAuthorization, withEmailVerification } from '../Session';

const Mentorship = () => (
  <div className="news">
    <Toolbar />
    <div className="left-home">
      <div className="left-home-top"></div>
      <div className="left-home-bottom"></div>
    </div>
    <div className="centre-home">
      <div className="centre-home-top">
        <p>
          import Terms from '../Terms'; stipulated above, such dispute
          will be submitted to and decided by a court of competent
          jurisdiction. Governing Law and Jurisdiction These terms and
          conditions and all matters arising out of or relating to
          these Terms and Conditions shall be governed by and are to
          be construed in accordance with the laws of Kenya, excluding
          any conflict of law provisions. By accessing this Site
          and/or using the Services provided herein you hereby consent
          to the exclusive jurisdiction of the Kenyan Laws in all
          disputes ar
        </p>
      </div>
      <div className="centre-home-bottom"></div>
    </div>

    <div className="right-home"></div>
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
)(Mentorship);
