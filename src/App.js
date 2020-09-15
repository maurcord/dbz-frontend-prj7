import React, { Component } from "react";
import Characters from "./Character";
import { baseurl } from "./constants.js";
import axios from "axios";
import "./App.css";
import UpdateForm from "./UpdateForm";
import DeleteChar from './DeleteForm';
import PersonList from './Addform'
import AddForm from "./Addform";

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
        <AddForm/>
        </div>
        <div>
          <UpdateForm/>
        </div>
         <div className='updateDelete'>
         <DeleteChar/>
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
