import React,{useState} from 'react' ;
import './App.css';
import Navbar from './components/Navbar';
import CreateNoteForm from './components/CreateNoteForm';
import StickyNote from './components/StickyNote';
import Footer from './components/Footer';



function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes((prevState) => {
      return [...prevState, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevState) => {
      return [...prevState.filter((note, index) => index !== id)];
    });
  }
  
  return (
  <div className="App">
      <Navbar />
      <CreateNoteForm handleNote={addNote} />
      <div className="container NoteContainer">
      {notes.map((note, index) => (
        <StickyNote
          key={index}
          id={index}
          title={note.title}
          body={note.body}
          handleDelete={deleteNote}
        />
      ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
