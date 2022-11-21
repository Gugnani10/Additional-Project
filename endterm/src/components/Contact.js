import React,{useState,useContext,useEffect}  from "react"
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Contact= ()=>{
    const Navigate=useNavigate();
    const [note, setNote] = useState({ title: "", description: ""});
    const context=useContext(userContext);
    const {user,notes,addNote}=context;

    useEffect(()=>{
        if(user.email=== ' '){
            Navigate("/login");

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        console.log("user info is send");
        addNote(note.title, note.description, user.email);
        console.log(notes); 
        // addNote(note.title, note.description, note.tag);
        // setNote({ title: "", description: "", tag: "" });
        // Navigate("/")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }



    return(
        <div className="container w-25">
            <h1>contact page</h1>
            <h5>if yoiu want to contact us leave a message below 👇</h5>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name="title" onChange={onChange} value={note.title} />

                </div>
                <div className="mb-3">
                    <label htmlFor="decription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description} />
                </div>


                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>


        </div>
    )
}

export default Contact;