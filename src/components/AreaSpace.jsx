import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function AreaSpace(props)
{
  const [isExpanded,setExpand]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    function change(event)
    {
        const {name,value}=event.target;
        setNote(prev=>{
            return {...prev,[name]:value}
        })

    }
    function save(event)
    {
        props.add(note);
        setNote({
            title: "",
            content: ""
          });
        event.preventDefault();

    }
    function set()
    {
      setExpand(true);
    }
    return (
        <div >
          <form className="create-note">
            {isExpanded&&<input name="title" placeholder="Title" onChange={change} value={note.title} />}
            
            <textarea onClick={set} name="content" placeholder="Take a note..." rows={isExpanded?3:1} onChange={change} value={note.content} />
            <Zoom in={isExpanded}>
            <Fab onClick={save}><AddIcon /></Fab>
            </Zoom>
            
          </form>
        </div>
      );
}
export default AreaSpace;