import React from "react";
import Note from "../note/Note";

const CardNotes = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => {
        return (
          <Note
            id={note.id}
            title={note.title}
            description={note.description}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CardNotes;
