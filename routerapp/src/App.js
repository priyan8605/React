
import './App.css';
import {Route,Routes,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/support'>Support</Link>
          </li>
          <li>
            <Link to='/labs'>Labs</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/support" element={<div>Support Page</div>}></Route>
        <Route path="/about" element={<div>About Page</div>}></Route>
        <Route path="/labs" element={<div>Labs Page</div>}></Route>
        <Route path="*" element={<div>Not found Page</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
