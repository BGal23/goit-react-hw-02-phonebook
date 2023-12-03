import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  addContact = event => {
    if (event.target.type === 'button') {
      const name = event.currentTarget.children[1].value;
      const number = event.currentTarget.children[4].value;
      this.setState(
        x =>
          (x.contacts[x.contacts.length] = {
            id: uuidv4(),
            name: name,
            number: number,
          })
      );
      console.log(this.state);
    }
  };
  render() {
    const person = this.state.contacts;
    const list = person.map(contact => (
      <li key={contact.id}>
        {contact.name} {contact.number}
      </li>
    ));
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm newContact={this.addContact} />
        <h2>Contact</h2>
        <Filter />
        <ContactList />
        {list}
      </>
    );
  }
}
