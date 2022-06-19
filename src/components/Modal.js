import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";

const ModalExample = ({
  // className,
  modal,
  id,
  title,
  body,
  handleToggle,
  handleChange,
  handleUpdate,
}) => {
  const handleClick = () => {
    handleUpdate(id);
  };

  return (
    <Modal isOpen={modal} toggle={handleToggle} className="modal" centered>
      <ModalBody>
        <div className="NoteCard">
          <Card className="stickyCard">
            <div>
              <CardTitle tag="h5">Edit Note</CardTitle>
              <CardText tag="p">
                <input
                  value={title}
                  type="text"
                  name="title"
                   className="inputs"
                  onChange={handleChange}
                />
              </CardText>
              <CardText tag="p">
                <textarea
                  value={body}
                  type="text"
                  name="body"
                  className="input2"
                  onChange={handleChange}
                  rows="3">
                </textarea>
              </CardText>
            </div>
          </Card>
          <div className="IconContainer">
            <ModalFooter className="modalFooter">
              <Button color="primary" onClick={handleClick}>
                Submit
              </Button>{" "}
              <Button color="secondary" onClick={handleToggle}>
                Cancel
              </Button>
            </ModalFooter>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalExample;
