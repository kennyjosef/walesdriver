import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './Components/Navbar/Nav';
import Contact from './Pages/ContactPage/Contact';
import Home from './Pages/HomePage/Home';
import Ipsum from './Pages/IpsumPage/Ipsum';
function App() {
  return (
    <div className="App">
          {/* <Nav/> */}
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='ipsum' element={<Ipsum/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
