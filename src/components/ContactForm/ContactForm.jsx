import { Component } from 'react';

export class ContactForm extends Component {
  render() {
    const { newContact } = this.props;
    return (
      <>
        <form onClick={newContact}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <br />
          <br />
          <button type="button">Add contact</button>
        </form>
      </>
    );
  }
}
