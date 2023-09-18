import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { CgArrowUpR } from 'react-icons/cg';

function ActivateNotebtn({ id, onActive }) {

    return (
            <Link to={`/`}>
                <button className='action' onClick={() => onActive(id)}><CgArrowUpR/></button>
            </Link>
    )
  }

  ActivateNotebtn.propTypes = {
    id: PropType.string.isRequired,
    onActive: PropType.func.isRequired,
  }
   

  export default ActivateNotebtn