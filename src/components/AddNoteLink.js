import React from 'react';
import { Link } from 'react-router-dom';

function AddNote(){
    return(
        <div className='homepage__action'>
            <Link to={`/notes/new`}>
                <button className='action' type='button' title='Tambah'>+</button>
            </Link>
        </div>
    )
}

export default AddNote