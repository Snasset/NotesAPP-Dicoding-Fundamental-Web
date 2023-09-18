import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { FiArchive } from 'react-icons/fi';

function ArchiveNotebtn({ id, onArchive }) {

    return (
            <Link to={`/`}>
                <button className='action' onClick={() => onArchive(id)}><FiArchive/></button>
            </Link>
    )
  }

  ArchiveNotebtn.propTypes = {
    id: PropType.string.isRequired,
    onArchive: PropType.func.isRequired,
  }
   

  export default ArchiveNotebtn