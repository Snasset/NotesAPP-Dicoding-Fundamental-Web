import React from 'react';
import NoteDetail from '../components/NoteDetail';
import {useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote  } from '../utils/data';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';

function DetailPageWrapper () {
    const {id} = useParams()
    return <DetailPage id={id}/>
}

class DetailPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            note : [],
            initializing : true,
            
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onActiveHandler = this.onActiveHandler.bind(this)
    }
    async componentDidMount(){
      const{data} = await getNote(this.props.id);

      this.setState(() =>{
          return{
              note:data,
              initializing : false,
              
          }
      })
  }

    async onDeleteHandler(id) {
    await deleteNote(id);
 
    // update the contact state from data.js
    const { data} = await getNote(id)
    this.setState(() => {
      return {
        note: data,
      }
    })
  }
  

  async onArchiveHandler(id){
    await    archiveNote(id)
    const { data} = await getNote(id)
    this.setState(() => {
      return {
        note: data,
      }
    })
    }
    async onActiveHandler(id){
      await   unarchiveNote(id)
      const { data} = await getNote(id)
      this.setState(() => {
        return {
          note: data,
        }
      })
    }
    render(){
      if (this.state.initializing) {
        return null;
      }
        if (this.state.note === undefined){
            return <NotFoundPage/>
        }
        
         return (
            <div>
                <NoteDetail 
                {...this.state.note} 
                onDelete={this.onDeleteHandler} 
                onArchive={this.onArchiveHandler}
                onActive={this.onActiveHandler}
                />  
            </div>
         )

    }
    
}
DetailPage.propType = {
  id: PropTypes.string.isRequired,
}
export default DetailPageWrapper
