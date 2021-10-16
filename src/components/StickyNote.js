import React, {useState} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { MdInvertColors , MdOutlineInvertColorsOff } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import styled from "@emotion/styled";

const StickyNote = ({ title, body, handleDelete, id }) => {
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
    <StickyCard  className="NoteCard" >
          <Card >
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText hag="p">{body}</CardText>
            <div className="IconContainer">
          <div>
          <button className="ColorButton white" onClick={() => setStyle("#fff")}><MdOutlineInvertColorsOff /></button>
            <button className="ColorButton yellow" onClick={() => setStyle("#fb8500")}><MdInvertColors /></button>
          <button className="ColorButton blue"  onClick={() => setStyle("#219ebc")}><MdInvertColors /></button>
          <button className="ColorButton red" onClick={() => setStyle("#c1121f")}><MdInvertColors /></button>
          </div>
          <button className="TrashButton" onClick={() => handleDelete(id)}><FaTrashAlt/></button>
            </div>
        </Card>
    </StickyCard>
  );
};

export default StickyNote;