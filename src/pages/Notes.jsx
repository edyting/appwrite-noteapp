import  { useEffect, useState } from 'react'
// import { database } from '../appwrite/config'
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';
import Note from '../components/Note';

const Notes = () => {
    
    // to initialize the notes array
    const [notes, setNotes] = useState([]);

    // initial call to fetch the notes from the server
    useEffect(() => {
        init();
    }, []);

    // to fetch the notes from the server
    const init = async () => {
      //  const response = await database.listDocuments(
      //    import.meta.env.VITE_DATABASE_ID,
      //    import.meta.env.VITE_COLLECTION_ID_NOTES
      //  );
      //   setNotes(response.documents);

      const response = await db.notes.list(
        [
          Query.orderDesc("$createdAt")
        ]
      );
      setNotes(response.documents);
     }
  return (
    <>
      
      <div className="">
        <h1>My NoteApp</h1>
      </div>

      <NoteForm setNotes={setNotes} />

      {notes.map((note) => (
        <div key={note.$id}>
          <Note  key={note.$id} setNotes={setNotes} noteData={note} />
        </div>
      ))}
    </>
  );
}

export default Notes
