import React,{useState} from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Col, FormGroup, Input, Card, Button } from 'reactstrap';

const CreateNoteForm = ({handleNote}) => {
    
    const [expanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        body: "",
      });
    const [isCompleted, setIsCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    

    const handleClick = () => {
        setExpanded(true);
    }

    const handleKeyUp = () => {
        setErrorMessage('')
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setNote((prevState) => {
    return {
        ...prevState,
        [name]: value,
    };
});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (!note.title || !note.body ) {
                setErrorMessage('you have to fill in all fields');
            } else {
                setIsCompleted(true);
                handleNote(note)
                setNote({
                    title: "",
                    body: "",
                  });
                console.log(isCompleted);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

  return (
      <div>
          <form className="CreateNoteContainer">
          <Col md={5} className=" mx-auto my-5">
          <Card>
                <section className="CreateNoteForm">     
                    {expanded && (
                        // if expanded is true, show the title input area, else dont show it.
                              <Col className="mx-auto">
                                  {errorMessage ? <p className="errorMessage">{errorMessage}</p> : '' }
                    <FormGroup>
                        <Input
                            type="text"
                            name="title"
                            value={note.title}
                            id="title"
                            placeholder="Title"
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                        />
                    </FormGroup>
                </Col>
                          )}
                <Col className="mx-auto my-2">
                    <FormGroup className="d-flex">
                        <Input
                            type="textarea"
                            onClick={handleClick}
                            name="body"
                            value={note.body}
                            id="note"
                            placeholder="Take a note..."
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                            rows={expanded ? 3 : 1}
                                // if expanded is true, show 3rows, else show just one.          
                        />
                        <Button className="addNote" onClick={handleSubmit}><MdAddCircle /></Button>
                    </FormGroup>   
                </Col>
               </section>
        </Card>
        </Col>
          </form>
    </div>
  );
};

export default CreateNoteForm;