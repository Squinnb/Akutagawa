import React, { useState, useEffect, useContext, memo } from 'react';
import {Route, Routes} from "react-router-dom"
import '../App.css';
import '../nav.css'
import BookIndex from "./BookIndex"  
import BookDetails from "./BookDetails"
import About from "./About"  
import Auth from "./AuthPage"  
import Nav from "./Nav" 
import UserHome from './UserHome';
import {Book} from './interfaces/baseInterface'
import {allBooks} from "../dummyData/Books"


const AkutagawaApp: React.FC = () => {
 
  const [books, setData] = useState<Book[]>(allBooks)



  

  return (
  <div className="AkutagawaApp">
      <Nav />  
      <main> 
        { books ? 
          <Routes>
            <Route  path="/" element={<BookIndex data={books} />} />
            <Route  path="/About" element={<About/>}  />
            <Route  path="/Akutagawashou/:title" element={<BookDetails/>}  />
            <Route  path="/Auth" element={<Auth  />}  />
            <Route  path="/UserHome" element={<UserHome  />}  />
          </Routes>
          :
          <div>hmm...</div>
        }    
    </main>
  </div>
    
  );
}

export default memo(AkutagawaApp);
