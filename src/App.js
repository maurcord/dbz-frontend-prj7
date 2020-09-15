import React, { Component } from "react";
import Characters from "./Character";
import { baseurl } from "./constants.js";
import axios from "axios";
import "./App.css";
// import NameForm from "./NameForms";
import UpdateDelete from './UpdateDeleteForm';
import PersonList from './Post'

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
      <div className="app">
        <h1 className='header'>Welcome to my DBZ page!</h1>
        <div>
        <PersonList/>
        </div>
         <div className='updateDelete'>
         <UpdateDelete/>
       </div>
        {this.state.characters.map((characters) => {
          return (
            <Characters key={characters.alpha3Code} name={characters.name}/>
          );
        })}
      </div>
    );
  }
}

export default App;
