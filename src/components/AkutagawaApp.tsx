import React from 'react';
import { RouterProvider, createBrowserRouter, } from "react-router-dom"
import '../App.css';
import '../nav.css'
import BookIndex from "./BookIndex"  
import BookDetails from "./BookDetails"
import About from "./About"  
import Auth from "./AuthPage"  
import Nav from "./Nav" 
import UserHome from './UserHome';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BookIndex />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Akutagawashou/:no",
    element: <BookDetails/>,
  },
  {
    path: "/Auth",
    element: <Auth/>,
  },
  {
    path: "/UserHome",
    element: <UserHome/>,
  }
], {basename: "/Akutagawa/"})

const AkutagawaApp: React.FC = () => {
  
  return (
  <div className="AkutagawaApp">
      <Nav />  
      <main> 
        <RouterProvider router={router} />
      </main>
  </div>
    
  );
}

export default AkutagawaApp;
