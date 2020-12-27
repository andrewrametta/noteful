import { Component } from "react";
import { Link } from "react-router-dom";

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
        <main>
          <aside>
            {this.state.folders.map((folder) => (
              <li key={folder.id}>{folder.name}</li>
            ))}
          </aside>
          <section>
            {this.state.notes.map((note) => (
              <div key={note.id}>
                {note.name}
                {note.modified}
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
