import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import AreaSpace from "./AreaSpace";
function App()
{
    const [notes,setNotes]=useState([]);
    function addNote(note)
    {
        setNotes(prev=>{
            return [...prev,note]
        })
    }
    function deleteNote(id)
    {
        setNotes(prev=>{
           return notes.filter((note,idx)=>{
               return idx!==id;
           })
        })
    }
    return (
        <div>
            <Header />
            <AreaSpace add={addNote} />
            {notes.map((note,idx)=>{
                return (<Note del={deleteNote} key={idx} id={idx} title={note.title} content={note.content}/>);
            })}
            
            <Footer />

        </div>

    );
}

export default App;