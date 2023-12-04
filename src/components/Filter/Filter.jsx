import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={filter} />
        <br />
      </>
    );
  }
}