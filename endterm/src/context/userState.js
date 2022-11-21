import React,{useState} from "react";
import userContext from "./userContext";

const UserState= (props)=>{

    let initialarray=[];
    const[notes,setNotes]=useState(initialarray);
    const [user,setUser] = useState({name:"",email:" ",password:""});

    const addUser= (name,email,password)=>{
        const obj={name,email,password};
        // console.log("adding the user is called");
        // console.log(name + email + password);
        setUser(obj);

        // console.log(obj);
    }

    const addNote=(title,description,email)=>{
        console.log(title);
        const note={title,description,email
            // "title":title,
            // "description":description,
            // "email":email
        }
        console.log(notes)
        setNotes(notes.concat(note));
    }

    return (
        <userContext.Provider value={{user,addUser,addNote,notes}}>
            {props.children}
        </userContext.Provider>
    )
};

export default UserState;
