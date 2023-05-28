import { useContext} from 'react';
import { UserContext } from "../contexts/UserContext.jsx"
import {router} from "./AkutagawaApp.js"



export default function Nav() {
    const { user, setUserInfo, toggleLang, lang } : any = useContext(UserContext)
    
    const navText = {"en": ["Home", "About", "User"], "ja": ["ホーム", "アバウト", "ユーザー"]}
    const authText = {"en": {"si":"Sign In", "so":"Sign Out"}, "ja": {"si":"ログイン", "so":"ログアウト"}}

    const signOut = () => {
        setUserInfo("Guest")
        router.navigate("/Akutagawa/")
    }

    return (
       <nav  id="navigation">
            <ul id="navList">
                <li className="navli"><div className="nl" onClick={() => router.navigate("/Akutagawa/")} >{navText[lang][0]}</div></li>
                <li className="navli"><div className="nl" onClick={() => router.navigate("/Akutagawa/About")}>{navText[lang][1]}</div></li>
                <li className="navli" ><button onClick={toggleLang} id='langBtn'>En/Ja</button></li>
                {user.name !== "Guest" ?
                        <>
                        
                        <li className="navli authLink">
                            <div  id='userHomediv' className="nl"  onClick={() => router.navigate("/Akutagawa/UserHome")}> {navText[lang][2]} </div>
                            <div onClick={signOut} className='nl' >{authText[lang].so}</div>
                        </li>
                        
                        </>
                      :  
                        <li className="navli authLink">
                            <div className="nl" onClick={() => router.navigate("/Akutagawa/Auth")}> {authText[lang].si} </div>
                        </li>
                }
                
                
            </ul>
            
       </nav>
    )
}