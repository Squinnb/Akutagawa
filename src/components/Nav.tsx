import { useContext} from 'react';
import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserContext.jsx"



export default function Nav() {
  
    const { user, toggleLang } : any = useContext(UserContext)
    
    return (

       <nav  id="navigation">
            <ul id="navList">
                <li className="navli"><NavLink className="nl currentLink" to="/">ホーム </NavLink></li>
                <li className="navli"><NavLink className="nl" to="/About">アバウト </NavLink></li>
                
                {user ?
                        <>
                        <li className="navli"><div onClick={toggleLang}>En/Ja</div></li>
                        <li className="navli authLink">
                            <NavLink  id='userHomeNavLink' className="nl"  to="/UserHome"> {user.name} </NavLink>
                        </li>
                        
                        </>
                      :  
                        ""
                }
                
                
            </ul>
            
       </nav>
    )
}