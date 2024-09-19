import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';
import { NavContext } from './context/navContext';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const [active, setActiveItem] = useState(pathname);
  return (
    <NavContext.Provider value={{active ,setActiveItem}}>
    <div className="App">
      <div className="portfolio-main-container">
      <Header/> 
      <Routes>
        <Route path='/About' element={<About/>}/>
      <Route path="/Home" element={<Home/>} /> 
      <Route path="/" element={<Home />} /> 
      <Route path="/Works" element={<Work/>} /> 
      <Route path="/Contact" element={<Contact/>} /> 
      </Routes>
    </div>
   </div>
   </NavContext.Provider>
  );
}

export default App;
