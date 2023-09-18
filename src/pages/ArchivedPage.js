import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/data';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArchivedPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')

    function changeSearchParams(keyword) {
      setSearchParams({ keyword })
    }
   
    return <ArchivedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }
  
class ArchivedPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            notes : getArchivedNotes(),
            keyword : props.defaultKeyword || ''
        }
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        })

        this.props.keywordChange(keyword)
      }

    render(){
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
              this.state.keyword.toLowerCase()
            )
          })

        if (this.state.notes.length === 0){
            return(
                <section>
                    <h2>Catatan Arsip</h2>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <section className='notes-list-empty'>
                        <p className='notes-list__empty'>Arsip Kosong</p>
                    </section>
                </section>
            )
                
        }
         return (
            <section>
                <h2>Catatan Arsip</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList notes = {notes}/>
            </section>
         )

    }
    
}

ArchivedPage.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}
export default ArchivedPageWrapper
