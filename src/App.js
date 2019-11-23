import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import FaqPage from './pages/Faq'
import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import Sidebar from 'components/Sidebar'

import Navbar from 'components/Navbar'
import NavbarClone from 'components/NavbarClone'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <NavbarClone />
        <Sidebar />
        <Switch>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
