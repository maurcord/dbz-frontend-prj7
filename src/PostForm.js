import React from 'react';
import axios from 'axios';
import { baseurl } from './constants';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    alert("new character added to DBZ world")
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`${baseurl}`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Add a new character name, description, and imageUrl:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
