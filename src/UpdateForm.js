import React from 'react';
import axios from 'axios';
import { baseurl } from './constants';

export default class UpdateForm extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    console.log("new character added to DBZ world")
    event.preventDefault();

    const user = {
      name: this.state.name,
      // description: this.state.description,
      // imageUrl: this.state.imageUrl
    };

    axios.put(`${baseurl}`, { user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Update character information:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
