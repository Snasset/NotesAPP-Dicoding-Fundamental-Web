import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import AddPage from './pages/AddPage';
import { Link } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/data';
import LogoutButton from './components/LogoutButton';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authedUser: null,
      initializing: true,
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }
  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }
  render(){
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null){
      return (
        <div className='app-container'>
          <header>
            <h1>Aplikasi Catatan</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage/>} />
            </Routes>
          </main>
        </div>
      )
    }
    return (
      <div className="app-container">
          <header>
              <h1> <Link to={`/`}>Aplikasi Catatan</Link></h1>
                <nav className='navigation'>
                
                  <ul>
                    <li>
                    <Link to={`/archives`}>Arsip</Link>
                    </li>
                  </ul>
                </nav>
                <LogoutButton logout={this.onLogout} name={this.state.authedUser.name} />
                      
          </header>
        <main>
  
  
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='*' element = {<NotFoundPage/>}/>
              <Route path='/notes/*' element = {<NotFoundPage/>}/>
              <Route path='/notes/:id' element = {<DetailPage/>}/>
              <Route path='/notes/new' element ={<AddPage/>}/>
              <Route path='/archives' element ={<ArchivedPage/>}/>
              
            </Routes>
            
          
          
        </main>
      </div>
    )
  }
  
}

export default App;
