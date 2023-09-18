import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteNotebtn';
import ArchiveNotebtn from './ArchiveNotebtn';
import ActivateNotebtn from './ActivateNotebtn';

function NoteDetail({id,title,createdAt,body,onDelete,onArchive,onActive,archived}){
    if (archived === true){
        return(
            <div className='detail-page'>
            <h2 className='detail-page__title'>{title} </h2>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)} </p>
            <p className='detail-page__body'>{body} </p>
            <div className='detail-page__action'>
                <ActivateNotebtn id={id} onActive={onActive}/>
                <DeleteButton id={id} onDelete={onDelete}/>
            </div>
        </div>

        )
    }
    return(
        <div className='detail-page'>
            <h2 className='detail-page__title'>{title} </h2>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)} </p>
            <p className='detail-page__body'>{body} </p>
            <div className='detail-page__action'>
                <ArchiveNotebtn id={id} onArchive={onArchive}/>
                <DeleteButton id={id} onDelete={onDelete}/>
            </div>
        </div>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt : PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived:PropTypes.bool.isRequired,
    onArchive : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired,
    onActive : PropTypes.func.isRequired,
}
export default NoteDetail 