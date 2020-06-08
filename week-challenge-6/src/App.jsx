import React, { Component, Fragment } from 'react';

import api from './services/api';
import sortList from './utils/SortListUtil';

import TopBar from './components/Topbar';
import Filters from './components/Filters';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Loader from './components/Loader';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

   this.state = {
     loading: true,
      contactsList: [],
      filteredContactsList: [],
      sortBy: "name"
   }
  }

  async componentDidMount() {
    const data = await api.then(data => data).catch(err => []);

    this.setState({ 
      contactsList: data,
      filteredContactsList: data,
      loading: false
    });

    this.updateSortBy(this.state.sortBy);
  }

  updateSortBy = async field => {
    const { contactsList, filteredContactsList } = this.state;

    await this.setState({ sortBy: field });

    const sortContactsList = sortList(contactsList, field);
    const sortFilteredContactsList = sortList(filteredContactsList, field);

    this.setState({
      contactsList: sortContactsList,
      filteredContactsList: sortFilteredContactsList
    });
  }

  updateSearchBy = (setence) => {
    const { contactsList } = this.state;

    const filteredContactsList = contactsList.filter(({ name }) => name.includes(setence));

    this.setState({ filteredContactsList });
  }

  renderContacts= () => {
    const { loading, filteredContactsList } = this.state;

    if (!!loading) {
      return (
        <Loader />
      )
    }

    if (filteredContactsList.length === 0) {
      return (
        <div className="contacts__not-found">
          <h1>Não há registros para exibir.</h1>
        </div>
      )
    }

    return (
      filteredContactsList.map(contact => (
        <Contact key={contact.id} data={contact} />
      ))
    )

  }
  
  render() {
    return (
      <div className="app" data-testid="app">
        <TopBar />
        <Filters sortBy={this.updateSortBy} searchBy={this.updateSearchBy} />

        <Contacts>
          { this.renderContacts() }
        </Contacts>

      </div>
    )
  }
}

export default App;
