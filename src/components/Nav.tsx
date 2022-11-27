import { useContext} from 'react';
import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserContext.jsx"



export default function Nav() {
  
    const {user } : any = useContext(UserContext)
    
    return (

       <nav  id="navigation">
            <ul id="navList">
                <li className="navli"><NavLink className="nl currentLink" to="/"> Home </NavLink></li>
                <li className="navli"><NavLink className="nl" to="/About"> About </NavLink></li>
                
                {user ?
                        <>
                        
                        <li className="navli authLink">
                            <NavLink  id='userHomeNavLink' className="nl"  to="/UserHome"> {user.name} </NavLink>

                            <NavLink className='nl' to="/Home">Logout</NavLink>
                        </li>
                        </>
                      :  
                        <li className="navli authLink">
                            <NavLink  className="nl" to="/Auth"> Sign In </NavLink>
                        </li>
                }
                
                
            </ul>
            
       </nav>
    )
}