import React,{Component} from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TourListing from './components/TourListing';
import Directory from './components/Directory';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="tours" element={<TourListing />} />
          <Route path="directory" element={<Directory />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      
    )
  }
}

export default App;