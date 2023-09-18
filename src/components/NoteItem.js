import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteArchives from './NoteArchives';
import { getArchivedNotes } from '../utils/local-data';
import PropTypes from 'prop-types';

function NoteItem ({id, title,createdAt, body,archived}){
    const archivedNote = getArchivedNotes()
    if(archivedNote === true){
        return (
        <div className='note-item'>
            <NoteArchives id={id} title={title} createdAt={createdAt} body = {body} archived={archived} />
        </div>
        )
    }
    return (
        <div className='note-item'>
            <NoteItemContent id={id} title={title} createdAt={createdAt} body = {body}/>
        </div>
    )
}

NoteItemContent.propType = {
    id: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    createdAt : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    archived :PropTypes.bool.isRequired
}
export default NoteItem