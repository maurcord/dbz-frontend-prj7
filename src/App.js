import React, { Component } from "react";
import Characters from "./Character";
import { baseurl } from "./constants.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: `${baseurl}`,
    }).then((res) => {
      console.log(res.data);
      this.setState({
        characters: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to my DBZ page!</h1>
        {this.state.characters.map((characters) => {
          return (
            <Characters key={characters.alpha3Code} name={characters.name} />
          );
        })}
      </div>
    );
  }
}

export default App;
