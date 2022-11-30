import React, { useState, useEffect, useContext } from 'react';
import {Route, Routes} from "react-router-dom"
import '../App.css';
import '../nav.css'
import BookIndex from "./BookIndex"  
import BookDetails from "./BookDetails"
import About from "./About"  
import Auth from "./AuthPage"  
import Nav from "./Nav" 
import UserHome from './UserHome';



const AkutagawaApp: React.FC = () => {
  
  return (
  <div className="AkutagawaApp">
      <Nav />  
      <main> 
        
          <Routes>
            <Route  path="/" element={<BookIndex />} />
            <Route  path="/About" element={<About/>}  />
            <Route  path="/Akutagawashou/:title" element={<BookDetails/>}  />
            <Route  path="/Auth" element={<Auth  />}  />
            <Route  path="/UserHome" element={<UserHome  />}  />
          </Routes>
            
    </main>
  </div>
    
  );
}

export default AkutagawaApp;
