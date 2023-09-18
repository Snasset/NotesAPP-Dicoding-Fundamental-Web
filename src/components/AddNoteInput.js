import React from 'react';
import { FiCheck } from 'react-icons/fi';
import PropTypes from 'prop-types';

class AddNoteInput extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            title : '',
            body : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state)
      }
    
    render(){
         return (
            <form className='add-new-page__input' onSubmit={this.onSubmitEventHandler}>
                <input className='add-new-page__input__title' placeholder='Judul Catatan' value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
                <textarea className='add-new-page__input__body'  placeholder='Isi Catatan' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <div className='add-new-page__action'>
                    <button className='action' type='submit' title='Simpan'><FiCheck/></button>
                </div>
            </form>
         )

    }


}
AddNoteInput.propTypes ={
  addNote: PropTypes.func.isRequired
}
export default AddNoteInput