import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import PropType from 'prop-types';

function DeleteButton({ id, onDelete }) {

    return (
            <Link to={`/`}>
                <button className='action' onClick={() => onDelete(id)}><FiTrash2/></button>
            </Link>
    )
  }

  DeleteButton.propTypes = {
    id: PropType.string.isRequired,
    onDelete: PropType.func.isRequired,
  }
   

  export default DeleteButton