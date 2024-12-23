import { useState } from "react";
import db from "../appwrite/databases";
import DeleteIcon from '../assets/DeleteIcon';


function Note({setNotes,noteData }) {

    const [note, setNote] = useState(noteData);

    const handleStatus = async () => {

        const status = !note.status;
        db.notes.update(note.$id, { status });
        setNote({
            ...note,
            status
        }); 

        // try {
        //     const payload = {
        //         status: !note.status
        //     }
        //     const response = await db.notes.update(note.$id, payload);
        //     setNote(response);
        // } catch (error) {
        //     console.error(error)
        // };
    }
    
    const handleDelete = async () => { 
        db.notes.delete(note.$id);
        setNotes((prevState) => prevState.filter((note) => note.$id !== note.$id));
     
    }

    

  return (
    <div className="note-wrapper">
      <div className="note-body" onClick={handleStatus}>
        <div className="">
          <span>{note.status ? <s>{note.Title}</s> : <>{note.Title}</>}</span>
              </div>
              
        <div className="note-body">
          <p>{note.status ? <s>{note.body}</s> : <>{note.body}</>}</p>
        </div>
          </div>
          
          {/* delete */}
          <div className="delete" onClick={handleDelete}>
              <DeleteIcon/>
          </div>
    </div>
  );
}

export default Note;
