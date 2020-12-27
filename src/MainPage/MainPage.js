import React from "react";
import { Link } from 'react-router-dom'

const MainPage = (props) => {
  return (
    <main>
      <aside>
        {props.folders.map((folder) => (
          <li key={folder.id}><Link to={folder.name}>{folder.name}</Link></li>
        ))}
      </aside>
      <section>
        {props.notes.map((note) => (
          <div key={note.id}>
            {note.name}
            {note.modified}
          </div>
        ))}
      </section>
    </main>
  );
};

export default MainPage;
