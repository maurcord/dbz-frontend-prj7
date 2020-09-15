import React from 'react';
import axios from 'axios';
import { baseurl } from './constants';

export default class AddForm extends React.Component {
  state = {
    name: '',
    description: '',
    imageUrl:''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name)
  }

  handleSubmit = event => {
    console.log("new character added to DBZ world")
    event.preventDefault();

    const user = {
      name: this.state.name,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    };

    axios.post(`https://project-6-dbz.herokuapp.com/characters/`, { name:user.name, description:user.description })
      .then(res => {
        console.log(res);
        console.log(res.config.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Add a new character name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
