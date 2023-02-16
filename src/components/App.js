import React from 'react';
import LeftMenu from './LeftMenu';
import Header from './Header';
import Body from './Body';
import Calendar from './Calendar';
import EventsBoard from './EventsBoard';
import Footer from './Footer';
// import { Route, Switch, useHistory, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <LeftMenu />
      <Header />
      <switch>
        <Body />
        <Calendar />
        <EventsBoard />
      </switch>
      <Footer />
    </div>
  )
}

export default App