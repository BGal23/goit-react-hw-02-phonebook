import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  addContact = event => {
    if (event.target.type === 'button') {
      console.log(event.currentTarget.children[1].value);
    }
  };
  render() {
    const { id, name, number } = this.state.contacts;
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm newContact={this.addContact} />
        <h2>Contact</h2>
        <Filter />
        <ContactList key={id} name={name} number={number}></ContactList>
      </>
    );
  }
}
