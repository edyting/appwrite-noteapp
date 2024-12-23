import db from "../appwrite/databases";

const NoteForm = ({ setNotes }) => {

    const handleAdd = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value; 

        if (title === "") return;

        try {
            const payload = {Title:title,body:body}
            const response = await db.notes.create(payload);
            setNotes((prevState) => [response, ...prevState]);
            // to reset the form
            event.target.reset();
        } catch (error) {
            console.error(error)
        };
    }

    return (
      <div>
        <form action="" onSubmit={handleAdd} id="todo-form">
          <div className="">
            <label htmlFor="title" className="head">Title</label>
            <input
              type="text"
              name="title"
              id=""
              placeholder="Please Enter Note Title here"
            />
          </div>

          <div className="">
            <label htmlFor="body" className="head">body</label>
            <input
              type="text"
              name="body"
              id=""
              placeholder="Please Enter Note Body here"
            />
          </div>
          
                <button className="submit-btn" type="submit">
                    Submit
                </button>
        </form>
      </div>
    );
}

export default NoteForm
