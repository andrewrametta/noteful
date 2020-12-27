import { Component } from "react";
import { Link } from "react-router-dom";
import MainPage from './MainPage/MainPage'

import "./App.css";
import dummy from "./Dummy";

class App extends Component {
  state = {
    folders: [],
    notes: [],
  };

  componentDidMount() {
    setTimeout(() => this.setState(dummy), 600);
  }

  

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" className="header">
            Noteful
          </Link>
        </header>
        <MainPage folders={this.state.folders} notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
