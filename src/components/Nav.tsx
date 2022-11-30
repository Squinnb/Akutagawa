import { useContext} from 'react';
import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserContext.jsx"



export default function Nav() {
  
    const { user, toggleLang, lang } : any = useContext(UserContext)
    const navText = {"en": ["Home", "About", "User"], "ja": ["ホーム", "アバウト", "ユーザー"]}

    return (

       <nav  id="navigation">
            <ul id="navList">
                <li className="navli"><NavLink className="nl currentLink" to="/">{navText[lang][0]}</NavLink></li>
                <li className="navli"><NavLink className="nl" to="/About">{navText[lang][1]}</NavLink></li>
                
                {user ?
                        <>
                        <li className="navli" ><button onClick={toggleLang} id='langBtn'>En/Ja</button></li>
                        <li className="navli authLink">
                            <NavLink  id='userHomeNavLink' className="nl"  to="/UserHome"> {navText[lang][2]} </NavLink>
                        </li>
                        
                        </>
                      :  
                        ""
                }
                
                
            </ul>
            
       </nav>
    )
}