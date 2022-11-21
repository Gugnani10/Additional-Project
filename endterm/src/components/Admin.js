import React,{useContext} from "react";
import userContext from "../context/userContext";
import NoteItem from "./NoteItem";

const Admin=()=>{

    const context=useContext(userContext);
    const {user,notes} = context;

    return(
        <div className="row my-3">
            {/* <h2>Your Notes</h2> */}
            {notes.map((note) => {
                return <NoteItem note={note}></NoteItem>;
            })}
        </div>
    )
};

export default Admin;