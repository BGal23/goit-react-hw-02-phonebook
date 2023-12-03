import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const user = this.props;
    const list = user.map(contact => (
      <li key={contact.id}>
        {contact.name} {contact.number}
      </li>
    ));
    return <ul>{list}</ul>;
  }
}
