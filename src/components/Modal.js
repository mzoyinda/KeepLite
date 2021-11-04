import React,{useState} from 'react';
import { Button, Modal, ModalBody, ModalFooter, Card, CardTitle, CardText } from 'reactstrap';
import { MdInvertColors , MdOutlineInvertColorsOff } from 'react-icons/md';
import styled from "@emotion/styled";


const ModalExample = ({ className, modal, title, body, handleToggle, handleChange, handleUpdate }) => {
    
    const [background, setBackground] = useState('#fff');

   
    const StickyCard  = styled.div`
    &.NoteCard, .card {
      background-color: ${background};
    }
  `;
  
    const setStyle = (background) => {
      setBackground(background);
      console.log(background);
    }


    return (
      
          <Modal isOpen={modal} toggle={handleToggle} className={className} centered>
            <ModalBody>
                <StickyCard className="NoteCard" >
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
                              <CardText hag="p">
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
                        <div className="buttonContainer">
                            <button className="ColorButton white" onClick={() => {setStyle("#fff"); }}><MdOutlineInvertColorsOff /></button>
                            <button className="ColorButton yellow" onClick={() => setStyle("#fb8500")}><MdInvertColors /></button>
                            <button className="ColorButton blue"  onClick={() => setStyle("#219ebc")}><MdInvertColors /></button>
                            <button className="ColorButton red" onClick={() => setStyle("#c1121f")}><MdInvertColors /></button>
                        </div>
                        <ModalFooter>
                            <Button color="secondary" onClick={handleUpdate}>Submit</Button>{' '}
                            <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                        </ModalFooter>
                    </div>
                </StickyCard>
            </ModalBody>   
      </Modal>
  );
}

export default ModalExample;