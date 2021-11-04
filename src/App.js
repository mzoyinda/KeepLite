import React,{useState} from 'react' ;
import './App.css';
import Navbar from './components/Navbar';
import CreateNoteForm from './components/CreateNoteForm';
import StickyNote from './components/StickyNote';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {

  const [notes, setNotes] = useState([])
  const [modal, setModal] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: '',
    body: ''
  });


  const addNote = (newNote) => {
    setNotes((prevState) => {
      return [...prevState, newNote];
    });
  }

  const handleToggle = () => {
        setModal(!modal);  //set modal to "true" to make it open
  }
  
  const editNote = (id) => {
    console.log(id)

    handleToggle();
  
    const editItem = notes.find((note , index) => {
      return index === id;
    })
    
    console.log(editItem);

    setEditedNote({
      title: editItem.title,
      body: editItem.body
    })

  }

  const handleEditChange = (e) => {
    const { name, value } = e.currentTarget;
    setEditedNote((prevState) => {
        return {
            ...prevState,
            [name]: value,
        };
});
}

  const handleUpdate = (id) => {
    
    notes.findIndex((note, index) => {
      return index === id;
    })

      setNotes((note) => ({
        ...notes,
        [note.id]: editedNote
      }));
    
  }

  const deleteNote = (id) => {
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
              editNote={editNote}
            />
          ))}
      </div>

        <Modal
        modal={modal}
        title={editedNote.title}
        body={editedNote.body}
        handleChange={handleEditChange}
        handleUpdate={handleUpdate}
        handleToggle = {handleToggle}
        />

      <Footer />
      
    </div>
    
  );
}

export default App;
