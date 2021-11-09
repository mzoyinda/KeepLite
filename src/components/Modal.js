import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Card, CardTitle, CardText } from 'reactstrap';


const ModalExample = ({ className, modal,id, title, body, handleToggle, handleChange, handleUpdate }) => {

    const handleClick = () => {
        handleUpdate(id);
      }

    return (
      
          <Modal isOpen={modal} toggle={handleToggle} className={className} centered>
            <ModalBody>
                <div className="NoteCard" >
                <Card className="stickyCard">
                    <div>
                            <CardTitle tag="h5">
                                  <input
                                    value={title}
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                  />
                              </CardTitle>
                              <CardText tag="p">
                                  <input
                                    value={body}
                                    type="text"
                                    name="body"
                                    onChange={handleChange} 
                                  />
                              </CardText>
                    </div>
                    </Card>
                    <div className="IconContainer">
                        <ModalFooter className="modalFooter">
                            <Button color="secondary" onClick={handleClick}>Submit</Button>{' '}
                            <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                        </ModalFooter>
                    </div>
                </div>
            </ModalBody>   
      </Modal>
  );
}

export default ModalExample;