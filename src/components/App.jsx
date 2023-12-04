import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {
        id: uuidv4(),
        name: 'Rosie Simpson',
        number: '459-12-56',
        disabled: 'block',
      },
      {
        id: uuidv4(),
        name: 'Hermione Kline',
        number: '443-89-12',
        disabled: 'block',
      },
      {
        id: uuidv4(),
        name: 'Eden Clements',
        number: '645-17-79',
        disabled: 'block',
      },
      {
        id: uuidv4(),
        name: 'Annie Copeland',
        number: '227-91-26',
        disabled: 'block',
      },
    ],
    name: '',
    number: '',
  };

  addContact = event => {
    event.preventDefault();
    const name = event.currentTarget.children[1].value;
    const number = event.currentTarget.children[4].value;
    this.setState(person =>
      person.contacts.push({
        id: uuidv4(),
        name: name,
        number: number,
        disabled: 'block',
      })
    );
    console.log(this.state);
  };

  findContact = event => {
    const value = event.target.value.toLowerCase();
    this.setState(find =>
      find.contacts.filter(person => {
        (person.name.toLowerCase().includes(value) ||
          person.number.includes(value)) === true
          ? (person.disabled = 'block')
          : (person.disabled = 'none');
        return console.log('ok');
      })
    );
  };

  render() {
    const person = this.state.contacts;
    const list = person.map(contact => (
      <li style={{ display: contact.disabled }} key={contact.id}>
        {contact.name} {contact.number}
      </li>
    ));

    return (
      <>
        <h2 hidden>Phonebook</h2>
        <ContactForm newContact={this.addContact} />
        <h2>Contact</h2>
        <Filter filter={this.findContact} />
        <ContactList />
        {list}
      </>
    );
  }
}
