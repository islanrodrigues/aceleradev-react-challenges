import React from 'react';

import TopBar from './components/Topbar';
import Filters from './components/Filters';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Filters />
        <Contacts>
          <Contact />
        </Contacts>
      </React.Fragment>
    )
  }
}

export default App;
