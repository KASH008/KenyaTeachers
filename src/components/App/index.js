import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Footer from '../Footer';
import Terms from '../Terms';
import Career from '../Career';
import Mentorship from '../Mentorship';
const App = () => (
  <Router>
    <div style={{ height: '100%' }}>
      <Navigation />
      <Landing />
      <hr />
      <Route exact path={ROUTES.TERMS} component={Terms} />
      <Route path={ROUTES.CAREER} component={Career} />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_IN} component={Mentorship} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Footer />
    </div>
  </Router>
);
export default withAuthentication(App);
