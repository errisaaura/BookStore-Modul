import './App.css';
import {Link, Route, Routes} from "react-router-dom"


import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import Pegawai from './pages/Pegawai'


function App() {
  return (
    
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <Link to="" className="navbar-brand p-2" >BookStore</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link" >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Gallery" className="nav-link" >
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Cart" className="nav-link" >
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Pegawai" className="nav-link" >
                Data Pegawai
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" className="nav-link" >
                About Us
              </Link>
            </li>
          </ul>
          
        </div>

        

      </nav>
      
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Pegawai" element={<Pegawai />}></Route>
      </Routes>
    </>

        
  );
}

export default App;

