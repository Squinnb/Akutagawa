import { useContext} from 'react';
import { NavLink, redirect } from "react-router-dom"
import { UserContext } from "../contexts/UserContext.jsx"



export default function Nav() {
    const { user, setUserInfo, toggleLang, lang } : any = useContext(UserContext)

    const navText = {"en": ["Home", "About", "User"], "ja": ["ホーム", "アバウト", "ユーザー"]}
    const authText = {"en": {"si":"Sign In", "so":"Sign Out"}, "ja": {"si":"ログイン", "so":"ログアウト"}}

    const signOut = () => {
        setUserInfo("Guest")
        redirect("/")
    }

    return (
       <nav  id="navigation">
            <ul id="navList">
                <li className="navli"><NavLink className="nl" to="/">{navText[lang][0]}</NavLink></li>
                <li className="navli"><NavLink className="nl" to="/About">{navText[lang][1]}</NavLink></li>
                <li className="navli" ><button onClick={toggleLang} id='langBtn'>En/Ja</button></li>
                {user.name !== "Guest" ?
                        <>
                        
                        <li className="navli authLink">
                            <NavLink  id='userHomeNavLink' className="nl"  to="/UserHome"> {navText[lang][2]} </NavLink>
                            <NavLink onClick={signOut} className='nl' to="/">{authText[lang].so}</NavLink>
                        </li>
                        
                        </>
                      :  
                        <li className="navli authLink">
                            <NavLink className="nl" to="/Auth"> {authText[lang].si} </NavLink>
                        </li>
                }
                
                
            </ul>
            
       </nav>
    )
}