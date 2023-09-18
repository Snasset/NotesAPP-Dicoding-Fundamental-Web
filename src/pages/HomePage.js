import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/data';
import AddNote from '../components/AddNoteLink';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')

    function changeSearchParams(keyword) {
      setSearchParams({ keyword })
    }
   
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes : [],
            keyword : props.defaultKeyword || ''
        }
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
    async componentDidMount() {
      const { data } = await getActiveNotes();
      
      this.setState(() => {
        return {
          notes: data
        }
      })
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
                        <p className='notes-list__empty'>Tidak ada catatan</p>
                    </section>

                </section>
            )
                
        }
        return(
            <section className='homepage'>
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteList notes = {notes}/>
                <AddNote/>
            </section>
        )
    }
}
HomePage.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}
export default HomePageWrapper