import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddNoteInput from '../components/AddNoteInput';
import { addNote } from '../utils/data';

function AddPage() {
    const navigate = useNavigate()
    async function onAddNoteHandler(note) {
        await addNote(note);
        navigate('/');
      }

    return(
        <div>
            <AddNoteInput addNote={onAddNoteHandler}/>
        </div>
    )
}

export default AddPage