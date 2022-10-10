import './App.css';
import TrackContainer from './containers/TrackContainer';
import UserContainer from './containers/UserContainer';
import GenresList from './components/GenresList';
import Home from './components/Home';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

<ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tracks'>Tracks</Link></li>
        <li><Link to='/tracks/genre'>Genre</Link></li>
        {/* <li><Link to='/playlist'>Playlist </Link></li> // Playlist by ID */}
        <li> Users</li>
      </ul>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/tracks' element={<TrackContainer />} />
        <Route path ='/tracks/genre' element={<GenresList />} />
        {/* <Route path ='/playlist' element={<Contact />} /> */}
      </Routes>


    <div className="App">
      <h1>Frontend Project</h1>

      <TrackContainer/>
      <UserContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
