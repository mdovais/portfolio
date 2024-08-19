import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from './pages/home';
import Header from './components/header';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';

function App() {
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <div className="App">
      <div className="portfolio-main-container">
      <Header active={activeItem} setActiveItem={setActiveItem}/> 
      <Routes>
        <Route path='/About' element={<About active={activeItem} setactive={setActiveItem}/>}/>
      <Route path="/Home" element={<Home active={activeItem} setactive={setActiveItem}/>} /> 
      <Route path="/" element={<Home active={activeItem} setactive={setActiveItem}/>} /> 
      <Route path="/Works" element={<Work active={activeItem} setactive={setActiveItem}/>} /> 
      <Route path="/Contact" element={<Contact active={activeItem} setactive={setActiveItem}/>} /> 
      </Routes>
    </div>
   </div>
  );
}

export default App;
