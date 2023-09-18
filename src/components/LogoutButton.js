import React from 'react';
import PropTypes from 'prop-types';

function LogoutButton({ logout, name }){
    return(
        <div>
                <button className='button-logout' type='button' title='Logout' onClick={logout}>&gt;{name}</button>        
        </div>
    )
}
LogoutButton.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };
export default LogoutButton